import {Editor} from "../../components/Editor";
import {useParams} from "react-router-dom";
import {useSinglePostQuery} from "../../hooks/useSinglePostQuery";

export const PostEditPage = () => {
    const {id} = useParams();

    const {data, isFetching} = useSinglePostQuery(id);

    if (isFetching) {
        return <p>Loading...</p>
    }

    return (
        <div className='p-3'>
            <div>Edit Post</div>
            {!isFetching && (
                <Editor content={data.data.content}/>
            )}
        </div>
    );
}