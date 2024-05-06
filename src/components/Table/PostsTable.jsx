import {Table} from "./Table";
import {createColumnHelper} from "@tanstack/react-table";
import {EditButton} from "../Button/EditButton";
import {NavLink} from "react-router-dom";
import {ADMIN_POSTS_PAGE} from "../../router";
import {DeleteButton} from "../Button/DeleteButton";
import {useMemo} from "react";

const columnHelper = createColumnHelper();

export const PostsTable = ({data, onConfirmationDelete}) => {
    const columns = useMemo(() => (
        [
            columnHelper.accessor('id', {
                id: 'id',
                header: 'id',
                cell: info => info.getValue()
            }),
            columnHelper.accessor('title', {
                header: 'title',
                cell: info => {
                    return <div className='truncate'>
                        {info.getValue()}
                    </div>
                }
            }),
            columnHelper.accessor('category', {
                header: 'category',
                cell: info => {
                    return <div className='truncate'>{info.getValue().title}</div>
                }
            }),
            columnHelper.display({
                header: 'actions',
                cell: props => (
                    <div className={'flex'}>
                        <NavLink to={`${ADMIN_POSTS_PAGE}/${props.row.getValue('id')}/edit`} className={'mr-1'}>
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
        <div className={'mb-3 overflow-x-auto'}>
            <Table templateClass='grid lg:grid-cols-[1fr,5fr,2fr,2fr] grid-cols-[1fr,4fr,2fr,2fr] gap-2'
                   columns={columns}
                   data={data}
            />
        </div>
    );
}