import {Input} from "../../components/Input/Input";
import {useEffect, useState} from "react";
import {Button} from "../../components/Button/Button";
import {ADMIN_CATEGORIES_PAGE, LOGIN_PAGE} from "../../router";
import {useAuthContext} from "../../context/AuthContext";
import {useNavigate, useParams} from "react-router-dom";
import {updateCategory} from "../../api/categories";
import {useSingleCategoryQuery} from "../../hooks/useSingleCategoryQuery";

export const CategoryEditPage = () => {
    const {id} = useParams();
    const {user, setUser} = useAuthContext();
    const {data: category} = useSingleCategoryQuery(id);
    const navigate = useNavigate();
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (category?.data) {
            console.log(category?.data)
            setTitle(category.data.title);
        }
    }, [category]);

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = await updateCategory(id, {title}, {headers: { Authorization: `Bearer ${user.token}` }});

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