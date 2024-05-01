import {Editor} from "../../components/Editor";
import {useNavigate, useParams} from "react-router-dom";
import {useSinglePostQuery} from "../../hooks/useSinglePostQuery";
import {useEffect, useState} from "react";
import {useAuthContext} from "../../context/AuthContext";
import {useCategoriesQuery} from "../../hooks/useCategoriesQuery";
import {updatePost} from "../../api/posts";
import {ADMIN_POSTS_PAGE, LOGIN_PAGE} from "../../router";
import {Input} from "../../components/Input/Input";
import {CategorySelect} from "../../components/Select/CategorySelect";
import {UploadImage} from "../../components/UploadImage";
import {Button} from "../../components/Button/Button";
import axios from "axios";
import {usePostEditor} from "../../hooks/usePostEditor";

export const PostEditPage = () => {
    const {id} = useParams();

    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [categoryId, setCategoryId] = useState(0);
    const [imageCover, setImageCover] = useState(null);
    const {user, setUser} = useAuthContext();
    const {data: post} = useSinglePostQuery(id);
    const {data: categories} = useCategoriesQuery();
    const [content, setContent] = useState();
    const postEditor = usePostEditor(content, setContent)

    useEffect(() => {
        if (post?.data && postEditor) {
            setTitle(post.data.title);
            setContent(post.data.content);
            postEditor.commands.setContent(post.data.content)
            setCategoryId(post.data.categoryId);

            if (post?.data.imageCover) {
                axios.get(`${process.env.REACT_APP_BE_HOST}/upload/${post.data.id}/${post.data.imageCover}`, {responseType: "blob"})
                    .then((result => {
                        const file = new File([result.data], post.data.imageCover, { type: result.data.type });
                        setImageCover(file);
                    }));
            }
        }
    }, [post, postEditor]);

    const onContentChange = (content) => {
        setContent(content)
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            await updatePost(id, {title, content, categoryId, imageCover}, {
                headers: { Authorization: `Bearer ${user.token}`, 'Content-Type': 'multipart/form-data' }
            });
            //TODO Implement notification

            navigate(ADMIN_POSTS_PAGE);
        } catch (err) {
            if (err.response.status === 401) {
                setUser(null);
                return navigate(LOGIN_PAGE);
            }
            console.log(err)
        }
    }

    return <div className='overflow-auto'>Create Post
        <form onSubmit={onSubmit}>
            <div className='mb-2 flex'>
                <Input name='title'
                       onChange={(event) => setTitle(event.target.value)}
                       value={title}
                       required
                />
                {categories?.data && (
                    <CategorySelect onChange={setCategoryId}
                                    categories={categories?.data ?? []}
                                    value={categoryId}
                    />
                )}
            </div>
            <div>
                <UploadImage image={imageCover} setImage={setImageCover}/>
            </div>
            <div className='mb-2'>
                <Editor
                    editor={postEditor}
                    content={content}
                    onUpdate={onContentChange}
                    showEditorMenu={true}
                />
            </div>
            <div className='mb-2 flex justify-center'>
                <Button type='submit'
                        className='uppercase rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-800 px-4 py-2'>Save</Button>
            </div>
        </form>
    </div>
}