import {ConfirmationDialog} from "./ConfirmationDialog";
import {CategorySelect} from "../Select/CategorySelect";
import {useEffect, useState} from "react";
import {deleteCategory} from "../../api/categories";
import {useAuthContext} from "../../context/AuthContext";
import {useQueryClient} from "@tanstack/react-query";

export const DeleteCategoryDialog = ({categories, deletedItem, open, onCancel}) => {
    const query = useQueryClient();
    const {user} = useAuthContext();
    const [newCategoryId, setNewCategoryId] = useState(0);

    useEffect(() => {
        if (!open) {
            setNewCategoryId(0);
        }
    }, [open]);

    const onDelete = async () => {
        try {
            const result = await deleteCategory(deletedItem.id, newCategoryId, {
                headers: { Authorization: `Bearer ${user.token}` }
            });

            onCancel();
            await query.invalidateQueries({ queryKey: ['categories'] })

            //TODO add notification
            console.log(result);
        } catch (err) {
            console.log(err)
        }
    }

    if (!deletedItem) {
        return <></>
    }

    return (
        <ConfirmationDialog deletedItem={deletedItem} open={open} onCancel={onCancel} onSubmit={onDelete}>
            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    Select new category for posts with {deletedItem.title} category:
                </p>
                <CategorySelect categories={categories?.data}
                                onChange={setNewCategoryId}
                />
            </div>
        </ConfirmationDialog>
    );
}