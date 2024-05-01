import {Editor} from "../../components/Editor";
import {Input} from "../../components/Input/Input";
import {useState} from "react";
import {Button} from "../../components/Button/Button";
import {useAuthContext} from "../../context/AuthContext";
import {createPost} from "../../api/posts";
import {useNavigate} from "react-router-dom";
import {ADMIN_POSTS_PAGE, LOGIN_PAGE} from "../../router";
import {UploadImage} from "../../components/UploadImage";
import {CategorySelect} from "../../components/Select/CategorySelect";
import {useCategoriesQuery} from "../../hooks/useCategoriesQuery";

export const PostCreatePage = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categoryId, setCategoryId] = useState(0);
    const [imageCover, setImageCover] = useState(null);
    const {user, setUser} = useAuthContext();
    const {data: categories} = useCategoriesQuery();

    const onContentChange = (content) => {
        setContent(content)
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            await createPost({title, content, categoryId, imageCover}, {
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
                <CategorySelect onChange={setCategoryId}
                                categories={categories?.data}
                />
            </div>
            <div>
                <UploadImage image={imageCover} setImage={setImageCover}/>
            </div>
            <div className='mb-2'>
                <Editor
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