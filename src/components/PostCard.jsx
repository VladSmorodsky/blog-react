import {Link} from "react-router-dom";

export const PostCard = ({post}) => {
    return (
        <div
            className="relative group overflow-hidden rounded-xl bg-white border border-gray-200">
            <div className={"h-48 bg-cover bg-center"} style={{backgroundImage: `url(https://picsum.photos/200)`}}>
                <div className='flex justify-end'>
                    <span
                        className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Purple</span>
                </div>
            </div>
            <div className={"p-8"}>
                <Link className={'text-3xl text-violet-500'} to={`/post/${post.id}`}>{post.title}</Link>
            </div>
        </div>
    );
}