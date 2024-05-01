import {ConfirmationDialog} from "./ConfirmationDialog";
import {useAuthContext} from "../../context/AuthContext";
import {deletePost} from "../../api/posts";
import {useQueryClient} from "@tanstack/react-query";

export const DeletePostDialog = ({deletedItem, open, onCancel}) => {
    const query = useQueryClient();
    const {user} = useAuthContext();
    const onSubmit = async () => {
        try {
            const result = await deletePost(deletedItem.id, {
                headers: { Authorization: `Bearer ${user.token}` }
            });

            onCancel();
            await query.invalidateQueries({ queryKey: ['posts'] })

            //TODO add notification
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <ConfirmationDialog deletedItem={deletedItem} open={open} onCancel={onCancel} onSubmit={onSubmit}/>
    );
}