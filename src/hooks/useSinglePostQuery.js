import {useQuery} from "@tanstack/react-query";
import {getPost} from "../api/posts";

export const useSinglePostQuery = (postId) => {
    return useQuery({
        queryKey: [`/posts/${postId}`],
        queryFn: () => getPost(postId)
    });
}