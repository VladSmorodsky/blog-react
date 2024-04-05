import {Link} from "react-router-dom";
import {MAIN_PAGE} from "../router";
import {Logo} from "./Logo";

export const Header = () => {
    return (
        <div className='bg-[#F7FAFC] fixed h-16 z-10 top-0 w-full border border-b-black-500 lg:px-14 px-6'>
            <div className='flex items-center h-full'>
                <Link className={'flex items-center'} to={MAIN_PAGE}>
                    <Logo/>
                </Link>
            </div>
        </div>
    );
}