import {useParams} from "react-router-dom";
import {useSinglePostQuery} from "../hooks/useSinglePostQuery";
import {Header} from "../components/Header";
import {Editor} from "../components/Editor";

export const PostPage = () => {
    const {id} = useParams();
    const {data, isFetching, isError} = useSinglePostQuery(id);

    return (
        <section id='blog'>
            <Header/>
            <div className="py-20">
                {isFetching && (
                    <p>Loading...</p>
                )}
                {!isFetching && (
                    <div>
                        <div className="px-12">
                            <div className="text-center">
                                <span
                                    className="text-5xl bg-clip-text text-transparent bg-gradient-to-r
                                        from-pink-500 to-violet-500 font-extrabold">
                                    {data.data.title.toUpperCase()}
                                </span>
                            </div>
                            <div className='post-content my-8 text-2xl'>
                                <Editor content={data.data.content}
                                        editable={false}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}