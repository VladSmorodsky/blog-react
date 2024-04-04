import {useQuery} from "@tanstack/react-query";
import {getPosts} from "../api/posts";

export const usePostsQuery = ({page = 1, category = null}) => {
    return useQuery({
        queryKey: ['posts', page, category],
        queryFn: () => getPosts(page, category),
        keepPreviousData: true
    });
}
