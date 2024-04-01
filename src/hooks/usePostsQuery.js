import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getPosts} from "../api/posts";

export const usePostsQuery = ({page = 1}) => {
    return useQuery({
        queryKey: ['posts', page],
        queryFn: () => getPosts(page),
        keepPreviousData: true
    });
}
