import {useCategoriesQuery} from "../../hooks/useCategoriesQuery";
import {NavLink} from "react-router-dom";
import {ADMIN_CATEGORIES_CREATE_PAGE} from "../../router";
import {Button} from "../../components/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useQueryClient} from "@tanstack/react-query";
import {CategoriesTable} from "../../components/Table/CategoriesTable";
import {useState} from "react";
import {DeleteCategoryDialog} from "../../components/Dialog/DeleteCategoryDialog";

export const AdminCategoriesPage = () => {
    useQueryClient();
    const {data: categories, isFetching} = useCategoriesQuery();
    const [deletedCategory, setDeletedCategory] = useState(null);
    const [open, setOpen] = useState(false)

    const onDeleteConfirmation = (category) => {
        setDeletedCategory(category)
        setOpen(true);
    }

    const closeDialog = () => {
        setDeletedCategory(null);
        setOpen(false);
    }

    if (isFetching) {
        <p>Loading..</p>
    }

    return <>
        <div className="p-2">
            <div className='flex justify-between'>
                <div className={'uppercase font-semibold text-xl mb-2'}>
                    categories
                </div>
                <NavLink to={ADMIN_CATEGORIES_CREATE_PAGE}>
                    <Button className='uppercase rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-800 px-2 py-1'>
                        <FontAwesomeIcon icon={faPlus}/>
                        <span className='ml-2'>Create</span>
                    </Button>
                </NavLink>
            </div>
            {isFetching && (
                <p>Loading..</p>
            )}
            {!isFetching && (
                <CategoriesTable data={categories?.data} onConfirmationDelete={onDeleteConfirmation}/>
            )}
        </div>
        <DeleteCategoryDialog open={open}
                              onCancel={closeDialog}
                              deletedItem={deletedCategory}
                              categories={categories}
        />
    </>
}