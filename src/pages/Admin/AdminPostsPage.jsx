import {usePostsQuery} from "../../hooks/usePostsQuery";
import {PostsTable} from "../../components/Table/PostsTable";
import Pagination from "rc-pagination";
import {PaginationButton} from "../../components/PaginationButton";
import {ChevronLeft} from "../../assets/ChevronLeft";
import {ChevronRight} from "../../assets/ChevronRight";
import {useState} from "react";
import {useQueryClient} from "@tanstack/react-query";
import {Button} from "../../components/Button/Button";
import {NavLink} from "react-router-dom";
import {ADMIN_POSTS_CREATE_PAGE} from "../../router";
import {faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {DeletePostDialog} from "../../components/Dialog/DeletePostDialog";
import {Input} from "../../components/Input/Input";

export const AdminPostsPage = () => {
    useQueryClient();
    const [filterParams, setFilterParams] = useState({
        page: 1,
        totalRows: 0,
        rowsPerPage: 0
    });
    const {data, isFetching} = usePostsQuery(filterParams);

    const [deletedPost, setDeletedPost] = useState(null);
    const [open, setOpen] = useState(false)

    const onDeleteConfirmation = (post) => {
        setDeletedPost(post)
        setOpen(true);
    }

    const closeDialog = () => {
        setDeletedPost(null);
        setOpen(false);
    }

    const setPage = (page) => {
        setFilterParams((prevState) => ({
            ...prevState,
            page: page
        }));
    }

    const setSearch = (value) => {
        setFilterParams((prevState) => ({
            ...prevState,
            page: 1,
            search: value
        }))
    }

    return (
        <div className="p-2">
            <div className='flex justify-between align-middle mb-2'>
                <div className={'uppercase font-semibold text-xl hidden sm:flex text-center'}>
                    <span>posts</span>
                </div>
                <div className='relative flex w-96'>
                    <div className='absolute flex self-center left-2 text-purple-900'>
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                    <Input name='search' className='px-7 border border-purple-900'
                           onChange={(event) => setSearch(event.target.value)} value={filterParams.search}/>
                </div>
                <div className='flex'>
                    <NavLink to={ADMIN_POSTS_CREATE_PAGE}>
                        <Button
                            className='uppercase h-full rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-800 px-2 py-1'>
                            <FontAwesomeIcon icon={faPlus}/>
                            <span className='ml-2 hidden sm:inline'>Create</span>
                        </Button>
                    </NavLink>
                </div>
            </div>
            {isFetching && (
                <p>Loading..</p>
            )}
            {!isFetching && (
                <>
                    <PostsTable data={data?.data} onConfirmationDelete={onDeleteConfirmation}/>
                    <div className='mt-2 flex justify-between align-middle'>
                        <Pagination
                            className='flex items-center text-xl mb-2'
                            current={filterParams.page}
                            onChange={setPage}
                            pageSize={data?.pagination.rowsPerPage}
                            total={data?.pagination.totalRows}
                            showTitle={false}
                            itemRender={(page, type) => {
                                const onClick = () => setPage(page);
                                if (type === 'prev') {
                                    return <PaginationButton
                                        onClick={page === 0 ? () => setPage(1) : onClick}><ChevronLeft/></PaginationButton>
                                }
                                if (type === 'next') {
                                    return <PaginationButton onClick={onClick}><ChevronRight/></PaginationButton>
                                }

                                if (type === 'jump-prev' || type === 'jump-next') {
                                    return;
                                }

                                return <PaginationButton onClick={onClick} active={filterParams.page === page}>
                                    {page}
                                </PaginationButton>
                            }}
                        />
                        <div className={'align-middle hidden sm:flex mb-2'}>
                            <label htmlFor="pageNumber" className={'text-lg mr-2'}>Page</label>
                            <input id={'pageNumber'} type="number"
                                   className='text-lg w-20 border border-blue-500 px-1'
                                   value={filterParams.page}
                                   onChange={(e) => setPage(e.target.value)}
                                   min='1'
                                   max={Math.ceil(data?.pagination.totalRows / data?.pagination.rowsPerPage)}
                            />
                        </div>
                    </div>
                    <DeletePostDialog open={open} onCancel={closeDialog} deletedItem={deletedPost}/>
                </>
            )}
        </div>
    );
}