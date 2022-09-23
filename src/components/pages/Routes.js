import About from "../about/About";
import Home from "../home/Home";
import Post from "../post/Post";
import Posts from "../posts/Posts";
import { ABOUT_PAGE, HOME_PAGE, POSTS_PAGE, POST_PAGE } from "../utils/urls";

export const routes = [
    {
        path: HOME_PAGE,
        element: <Home/>,
        name: "Home"
    },
    {
        path: POSTS_PAGE,
        element: <Posts/>,
        name: "Posts"
    },
    {
        path: ABOUT_PAGE,
        element: <About/>,
        name: "About"
    },
    {
        path: POST_PAGE + '/:id',
        element: <Post/>,
        name: ''
    }
]