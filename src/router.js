import {createBrowserRouter} from "react-router-dom";
import {BlogPage} from "./pages/BlogPage";
import {PostPage} from "./pages/PostPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {LoginPage} from "./pages/LoginPage";
import {ProtectedRoute} from "./components/ProtectedRoute";
import {AdminPage} from "./pages/Admin/AdminPage";
import {AdminPostsPage} from "./pages/Admin/AdminPostsPage";
import {AdminCategoriesPage} from "./pages/Admin/AdminCategoriesPage";
import {PostEditPage} from "./pages/Admin/PostEditPage";
import {PostCreatePage} from "./pages/Admin/PostCreatePage";
import {CategoryCreatePage} from "./pages/Admin/CategoryCreatePage";
import {CategoryEditPage} from "./pages/Admin/CategoryEditPage";

export const POST_PAGE = '/post/:id';
export const MAIN_PAGE = '/';
export const LOGIN_PAGE = '/login';
export const NOT_FOUND_PAGE = '*';
export const ADMIN_PAGE = '/admin';
export const ADMIN_CATEGORIES_PAGE = `${ADMIN_PAGE}/categories`;
export const ADMIN_POSTS_PAGE = `${ADMIN_PAGE}/posts`;
export const ADMIN_POSTS_CREATE_PAGE = `${ADMIN_POSTS_PAGE}/create`;
export const ADMIN_EDIT_POST_PAGE = `${ADMIN_POSTS_PAGE}/:id/edit`;
export const ADMIN_CATEGORIES_CREATE_PAGE = `${ADMIN_CATEGORIES_PAGE}/create`;
export const ADMIN_CATEGORIES_EDIT_PAGE = `${ADMIN_CATEGORIES_PAGE}/:id/edit`;

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
                element: <AdminPage>

                </AdminPage>
            },
            {
                path: ADMIN_POSTS_PAGE,
                element: <AdminPage>
                    <AdminPostsPage/>
                </AdminPage>
            },
            {
                path: ADMIN_CATEGORIES_PAGE,
                element: <AdminPage>
                    <AdminCategoriesPage/>
                </AdminPage>
            },
            {
                path: ADMIN_POSTS_CREATE_PAGE,
                element: <AdminPage>
                    <PostCreatePage/>
                </AdminPage>
            },
            {
                path: ADMIN_EDIT_POST_PAGE,
                element: <AdminPage>
                    <PostEditPage/>
                </AdminPage>
            },
            {
                path: ADMIN_CATEGORIES_CREATE_PAGE,
                element: <AdminPage>
                    <CategoryCreatePage/>
                </AdminPage>
            },
            {
                path: ADMIN_CATEGORIES_EDIT_PAGE,
                element: <AdminPage>
                    <CategoryEditPage/>
                </AdminPage>
            }
        ]
    }
]);