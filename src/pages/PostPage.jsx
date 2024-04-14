import {useParams} from "react-router-dom";
import {useSinglePostQuery} from "../hooks/useSinglePostQuery";
import {Header} from "../components/Header";

export const PostPage = () => {
    const {id} = useParams();
    const {data, isFetching, isError} = useSinglePostQuery(id)

    return (
        <section id='blog'>
            <Header/>
            <div className="py-20">
                {!isFetching && (
                    <div>
                        <div className="mx-auto px-6 max-w-6xl">
                            <div className="text-center">
                                <span
                                    className="text-5xl bg-clip-text text-transparent bg-gradient-to-r
                                        from-pink-500 to-violet-500 font-extrabold">
                                    {data.data.title.toUpperCase()}
                                </span>
                            </div>
                            <div className='my-8 text-2xl'>
                                {data.data.content}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}