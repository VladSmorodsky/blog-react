import {Editor} from "../../components/Editor";
import {Input} from "../../components/Input/Input";
import {useState} from "react";
import {Button} from "../../components/Button/Button";
import {useAuthContext} from "../../context/AuthContext";
import {createPost} from "../../api/posts";
import {useNavigate} from "react-router-dom";
import {ADMIN_PAGE, LOGIN_PAGE} from "../../router";
import {useCategoriesQuery} from "../../hooks/useCategoriesQuery";
import {UploadImage} from "../../components/UploadImage";

export const PostCreatePage = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categoryId, setCategoryId] = useState(0);
    const [imageCover, setImageCover] = useState(null);
    const {user, setUser} = useAuthContext();
    const {data: categories, isFetching} = useCategoriesQuery();

    const onContentChange = (content) => {
        setContent(content)
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log('[img]', imageCover)
            const data = await createPost({title, content, categoryId, imageCover}, {
                headers: { Authorization: `Bearer ${user.token}`, 'Content-Type': 'multipart/form-data' }
            });
            //TODO Implement notification

            navigate(ADMIN_PAGE);
        } catch (err) {
            if (err.response.status === 401) {
                setUser(null);
                return navigate(LOGIN_PAGE);
            }
            console.log(err)
        }
    }

    if (isFetching) {
        return <p>Loading...</p>
    }

    return <div className='overflow-auto'>Create Post
        <form onSubmit={onSubmit}>
            <div className='mb-2 flex'>
                <Input name='title'
                       onChange={(event) => setTitle(event.target.value)}
                       value={title}
                       required
                />
                <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    onChange={(event) => setCategoryId(parseInt(event.target.value))}
                >
                    <option value={0}>Select category</option>
                    {categories.data.map((category) => (
                        <option key={category.id} value={category.id}>{category.title}</option>
                    ))}
                </select>
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