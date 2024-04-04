import {Link} from "react-router-dom";
import {CategoryBadge} from "./CategoryBadge";

export const PostCard = ({post}) => {
    return (
        <div
            className="relative group overflow-hidden rounded-xl bg-white border border-gray-200">
            <div className={"h-48 bg-cover bg-center"} style={{backgroundImage: `url(https://picsum.photos/200)`}}>
                <div className='flex justify-end'>
                    <CategoryBadge category={post.category} className={'text-sm'}/>
                </div>
            </div>
            <div className={"p-8"}>
                <Link className={'text-xl text-violet-500 font-semibold'} to={`/post/${post.id}`}>
                    {post.title.toUpperCase()}
                </Link>
            </div>
        </div>
    );
}