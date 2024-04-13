import {createBrowserRouter} from "react-router-dom";
import {BlogPage} from "./pages/BlogPage";
import {PostPage} from "./pages/PostPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {LoginPage} from "./pages/LoginPage";
import {ProtectedRoute} from "./components/ProtectedRoute";
import {AdminPage} from "./pages/Admin/AdminPage";
import {AdminPosts} from "./pages/Admin/AdminPosts";
import {AdminCategories} from "./pages/Admin/AdminCategories";

export const POST_PAGE = '/post/:id';
export const MAIN_PAGE = '/';
export const LOGIN_PAGE = '/login';
export const NOT_FOUND_PAGE = '*';
export const ADMIN_PAGE = '/admin';
export const ADMIN_CATEGORIES_PAGE = `${ADMIN_PAGE}/categories`
export const ADMIN_POSTS_PAGE = `${ADMIN_PAGE}/posts`

export const router = createBrowserRouter([
    {
        path: MAIN_PAGE,
        element: <BlogPage/>
    },
    {
        path: POST_PAGE,
        element: <PostPage/>
    },
    {
        path: LOGIN_PAGE,
        element: <LoginPage/>
    },
    {
        path: NOT_FOUND_PAGE,
        element: <NotFoundPage/>
    },
    {
        path: ADMIN_PAGE,
        element: <ProtectedRoute/>,
        children: [
            {
                path: ADMIN_PAGE,
                element: <AdminPage/>
            },
            {
                path: ADMIN_POSTS_PAGE,
                element: <AdminPage>
                    <AdminPosts/>
                </AdminPage>
            },
            {
                path: ADMIN_CATEGORIES_PAGE,
                element: <AdminPage>
                    <AdminCategories/>
                </AdminPage>
            },
        ]
    }
]);