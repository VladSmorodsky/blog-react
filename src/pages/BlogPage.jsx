import {PostCard} from "../components/PostCard";
import {useQueryClient} from "@tanstack/react-query";
import {usePostsQuery} from "../hooks/usePostsQuery";
import {useState} from "react";
import Pagination from "rc-pagination";
import {ChevronLeft} from "../assets/ChevronLeft";
import {ChevronRight} from "../assets/ChevronRight";
import {PaginationButton} from "../components/PaginationButton";
import {Header} from "../components/Header";
import {useCategoriesQuery} from "../hooks/useCategoriesQuery";
import {CategoryBadge} from "../components/CategoryBadge";

export const BlogPage = () => {
    useQueryClient();
    const [filterParams, setFilterParams] = useState({
        page: 1,
        category: null
    });
    const {data, isFetching} = usePostsQuery(filterParams);
    const {data: categories} = useCategoriesQuery();
    const defaultCategory = {id: null, title: 'All'}

    const setPage = (page) => {
        setFilterParams((prevState) => ({
            ...prevState,
            page: page
        }));
    }

    const setCategory = (categoryId) => {
        setFilterParams((prevState) => ({
            ...prevState,
            page: 1,
            category: categoryId
        }))
    };

    return (
        <section>
            <Header />
            <div className="py-20">
                <div className="lg:px-14 px-6">
                    <div className="text-center">
                        <span className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-extrabold py-2">Blog</span>
                    </div>
                    <div className={'flex'}>
                        <CategoryBadge className={'text-xl'} category={defaultCategory} className={`text-xl ${defaultCategory.id === filterParams.category ? 'border border-purple-600' : ''}`} onClick={() => setCategory(defaultCategory.id)}/>
                        {categories?.data.map((category, index) => {
                            return (<CategoryBadge key={index} className={`text-xl ${category.id === filterParams.category ? 'border border-purple-600' : ''}`} category={category} onClick={() => setCategory(category.id)} />)
                        })}
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
                current={filterParams.page}
                showLessItems
                onChange={setPage}
                pageSize={data?.pagination.rowsPerPage}
                total={data?.pagination.totalRows}
                showTitle={false}
                itemRender={(page, type) => {
                    const onClick = () => setPage(page);
                    if (type === 'prev') {
                        return <PaginationButton onClick={page === 0 ? () => setPage(1) : onClick}><ChevronLeft/></PaginationButton>
                    }
                    if (type === 'next') {
                        return <PaginationButton onClick={onClick}><ChevronRight/></PaginationButton>
                    }

                    return <PaginationButton onClick={onClick} active={filterParams.page === page}>
                        {page}
                    </PaginationButton>
                }}
            />)}
        </section>
    );
}