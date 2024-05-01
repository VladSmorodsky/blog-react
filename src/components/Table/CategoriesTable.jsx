import {Table} from "./Table";
import {createColumnHelper} from "@tanstack/react-table";
import {EditButton} from "../Button/EditButton";
import {NavLink} from "react-router-dom";
import {ADMIN_CATEGORIES_PAGE} from "../../router";
import {DeleteButton} from "../Button/DeleteButton";
import {useMemo} from "react";

const columnHelper = createColumnHelper(); //useMemo

export const CategoriesTable = ({data, onConfirmationDelete}) => {
    const columns = useMemo(() => (
        [
            columnHelper.accessor('id', {
                id: 'id',
                header: 'id',
                cell: info => info.getValue()
            }),
            columnHelper.accessor('title', {
                header: 'title',
                cell: info => info.getValue()
            }),
            columnHelper.display({
                header: 'actions',
                cell: props => (
                    <div className={'flex'}>
                        <NavLink to={`${ADMIN_CATEGORIES_PAGE}/${props.row.getValue('id')}/edit`} className={'mr-1'}>
                            <EditButton/>
                        </NavLink>
                        <DeleteButton setConfirmationDialog={() => onConfirmationDelete({
                            id: props.row.getValue('id'),
                            title: props.row.getValue('title'),
                        })}/>
                    </div>
                )
            })
        ]
    ), [])
    return (
        <div className={'h-4/5 mb-3'}>
            <Table templateClass='grid grid-cols-[1fr,2fr,1fr] gap-2'
                   columns={columns}
                   data={data}
            />
        </div>
    );
}