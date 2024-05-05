import {useQuery} from "@tanstack/react-query";
import {getPosts} from "../api/posts";
import {useEffect, useState} from "react";

export const usePostsQuery = (params = {page: 1, category: null, search: ''}) => {
    const [newParams, setNewParams] = useState(params)

    useEffect(() => {
        if (newParams.search !== params.search) {
            const getPostsId = setTimeout(() => setNewParams(params), 500);
            return () => clearTimeout(getPostsId);
        } else {
            setNewParams(params);
        }
    }, [params]);

    return useQuery({
        queryKey: ['posts', newParams.page, newParams.category, newParams.search],
        queryFn: () => getPosts(newParams.page, newParams.category, newParams.search),
        keepPreviousData: true,
        cacheTime: 5000
    });
}
