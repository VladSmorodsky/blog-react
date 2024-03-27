import {Link} from "react-router-dom";

export const PostCard = ({post}) => {
    return (
        <div
            className="relative group overflow-hidden rounded-xl bg-white border border-gray-200">
            <div className={"flex"}>
                <img className={"w-full h-fit"} src="https://picsum.photos/200" alt=""/>
            </div>
            <div className={"p-8 "}>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
            </div>
        </div>
    );
}