import {useParams} from "react-router-dom";
import {useSinglePostQuery} from "../hooks/useSinglePostQuery";
import {Header} from "../components/Header";
import {EditorContent, useEditor} from "@tiptap/react";
import {StarterKit} from "@tiptap/starter-kit";
import {useEffect} from "react";

export const PostPage = () => {
    const {id} = useParams();
    const {data, isFetching, isError} = useSinglePostQuery(id);
    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        editable: false
    });

    useEffect(() => {
        if (!isFetching) {
            editor.commands.setContent(data.data.content);
        }
    }, [isFetching]);

    return (
        <section id='blog'>
            <Header/>
            <div className="py-20">
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
                                <EditorContent editor={editor} content={data.data.content}/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}