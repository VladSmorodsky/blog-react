import {PostCard} from "../components/PostCard";
import {useQueryClient} from "@tanstack/react-query";
import {usePostsQuery} from "../hooks/usePostsQuery";
import {useState} from "react";
import Pagination from "rc-pagination";
import {ChevronLeft} from "../assets/ChevronLeft";
import {ChevronRight} from "../assets/ChevronRight";
import {PaginationButton} from "../components/PaginationButton";
import {Header} from "../components/Header";

export const BlogPage = () => {
    useQueryClient()
    const [currentPage, setCurrentPage] = useState(1);
    const {data, isFetching} = usePostsQuery({page: currentPage});

    return (
        <section>
            <Header />
            <div className="py-20">
                <div className="lg:px-14 px-6">
                    <div className="text-center">
                        <span className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-extrabold py-2">Blog</span>
                    </div>
                    <div className="mt-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {data?.data.map((post, index) => {
                            return <PostCard key={index} post={post}/>;
                        })}
                    </div>
                </div>
            </div>
            {!isFetching && (<Pagination
                className='flex justify-center items-center text-xl mb-2'
                current={currentPage}
                showLessItems
                onChange={setCurrentPage}
                pageSize={data?.pagination.rowsPerPage}
                total={data?.pagination.totalRows}
                showTitle={false}
                itemRender={(page, type) => {
                    const onClick = () => setCurrentPage(page);
                    if (type === 'prev') {
                        return <PaginationButton onClick={page === 0 ? () => setCurrentPage(1) : onClick}><ChevronLeft/></PaginationButton>
                    }
                    if (type === 'next') {
                        return <PaginationButton onClick={onClick}><ChevronRight/></PaginationButton>
                    }

                    return <PaginationButton onClick={onClick}
                                             active={currentPage === page}>
                        {page}
                    </PaginationButton>
                }}
            />)}
        </section>
    );
}