import {Link} from "react-router-dom";
import {MAIN_PAGE} from "../router";

export const Header = () => {
    return (
        <div className='bg-[#F7FAFC] fixed h-16 z-10 top-0 w-full border border-b-black-500 lg:px-14 px-6'>
            <div className='flex items-center h-full'>
                <Link className={'flex items-center'} to={MAIN_PAGE}>
                    <div className={`size-10 bg-logo bg-cover`}>
                    </div>
                    <span
                        className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-extrabold'>KSMETIX
                    </span>
                </Link>
            </div>
        </div>
    );
}