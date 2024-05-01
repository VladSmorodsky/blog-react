import {Input} from "../../components/Input/Input";
import {useState} from "react";
import {Button} from "../../components/Button/Button";
import {ADMIN_CATEGORIES_PAGE, LOGIN_PAGE} from "../../router";
import {useAuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {createCategory} from "../../api/categories";

export const CategoryCreatePage = () => {
    const {user, setUser} = useAuthContext();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = await createCategory({title}, {
                headers: { Authorization: `Bearer ${user.token}` }
            });
            //TODO Implement notification

            navigate(ADMIN_CATEGORIES_PAGE);
        } catch (err) {
            if (err.response.status === 401) {
                setUser(null);
                return navigate(LOGIN_PAGE);
            }
            console.log(err)
        }
    }

    return (
        <div className='overflow-auto'>Create Category
            <form onSubmit={onSubmit}>
                <div className='mb-2 flex'>
                    <Input name='title'
                           onChange={(event) => setTitle(event.target.value)}
                           value={title}
                           required
                    />
                </div>
                <div className='mb-2 flex justify-center'>
                    <Button type='submit'
                            className='uppercase rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-800 px-4 py-2'>Save</Button>
                </div>
            </form>
        </div>
    );
}