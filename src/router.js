import {createBrowserRouter} from "react-router-dom";
import {BlogPage} from "./pages/BlogPage";
import {PostPage} from "./pages/PostPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {LoginPage} from "./pages/LoginPage";

export const POST_PAGE = '/post/:id';
export const MAIN_PAGE = '/';
export const LOGIN_PAGE = '/login';
export const NOT_FOUND_PAGE = '*';

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
        element: <NotFoundPage />
    }
]);