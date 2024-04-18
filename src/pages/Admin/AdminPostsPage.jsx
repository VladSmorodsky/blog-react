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
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const AdminPostsPage = () => {
    useQueryClient();
    const [filterParams, setFilterParams] = useState({
        page: 1,
        totalRows: 0,
        rowsPerPage: 0
    });
    const {data, isFetching} = usePostsQuery(filterParams);

    const setPage = (page) => {
        setFilterParams((prevState) => ({
            ...prevState,
            page: page
        }));
    }

    return (
        <div className="p-2">
            <div className='flex justify-between'>
                <div className={'uppercase font-semibold text-xl mb-2'}>
                    posts
                </div>
                <NavLink to={ADMIN_POSTS_CREATE_PAGE}>
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
                <>
                    <PostsTable data={data?.data}/>
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
                        <div className={'align-middle'}>
                            <label htmlFor="pageNumber" className={'text-xl mr-2'}>Page</label>
                            <input id={'pageNumber'} type="number"
                                   className='text-xl w-20 border border-blue-500 px-1 py-2'
                                   value={filterParams.page}
                                   onChange={(e) => setPage(e.target.value)}
                                   min='1'
                                   max={Math.ceil(data?.pagination.totalRows / data?.pagination.rowsPerPage)}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}