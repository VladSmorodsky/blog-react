import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";
import {useAuthContext} from "../../context/AuthContext";
import {MenuItem} from "../MenuItem";
import {ADMIN_CATEGORIES_PAGE, ADMIN_POSTS_PAGE} from "../../router";
import {PostIcon} from "../../assets/PostIcon";
import {CategoryIcon} from "../../assets/CategoryIcon";

export const Dropdown = () => {
    const {user, setUser} = useAuthContext();
    const onSubmit = (event) => {
        event.preventDefault();
        setUser(null);
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {user.email}
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item className='md:hidden flex bg-inherit'>
                            <MenuItem path={ADMIN_POSTS_PAGE} className='flex text-sm align-middle'>
                                <PostIcon/>
                                <span className='flex text-center self-center'>POSTS</span>
                            </MenuItem>
                        </Menu.Item>
                        <Menu.Item className='md:hidden flex bg-inherit'>
                            <MenuItem path={ADMIN_CATEGORIES_PAGE} className='flex text-sm align-middle'>
                                <CategoryIcon/>
                                <span className='flex text-center self-center'>CATEGORIES</span>
                            </MenuItem>
                        </Menu.Item>
                        <hr className="h-px bg-gray-200 border-0"/>
                        <Menu.Item>
                            <form onSubmit={onSubmit}>
                                <button
                                    type="submit"
                                    className={
                                        `block w-full px-4 py-2 text-left text-sm text-red-500`
                                    }
                                >
                                    Sign out
                                </button>
                            </form>
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}