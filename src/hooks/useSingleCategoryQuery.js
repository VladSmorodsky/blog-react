import {useQuery} from "@tanstack/react-query";
import {getCategory} from "../api/categories";

export const useSingleCategoryQuery = (id) => {
    return useQuery({
        queryKey: ['categories', id],
        queryFn: () => getCategory(id),
    });
}