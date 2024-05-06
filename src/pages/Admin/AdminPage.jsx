import {Header} from "../../components/Header";
import {ADMIN_CATEGORIES_PAGE, ADMIN_POSTS_PAGE} from "../../router";
import {MenuItem} from "../../components/MenuItem";
import {PostIcon} from "../../assets/PostIcon";
import {CategoryIcon} from "../../assets/CategoryIcon";
import {Dropdown} from "../../components/Dropdown/Dropdown";

export const AdminPage = ({children}) => {
    return <>
        <Header className={'justify-between'}>
            <Dropdown />
        </Header>
        <div className={'pt-16 grid lg:grid-cols-6 md:grid-cols-8 grid-cols-1 gap-2 h-lvh md:overflow-hidden'}>
            <div className={'md:grid relative lg:col-span-1 md:col-span-2 pt-0 min-h-0 border-r border-black-500 hidden'}>
                <div className={'md:flex md:flex-col'}>
                    <MenuItem path={ADMIN_POSTS_PAGE} className='flex'>
                        <PostIcon/>
                        <span>POSTS</span>
                    </MenuItem>
                    <MenuItem path={ADMIN_CATEGORIES_PAGE} className='flex'>
                        <CategoryIcon/>
                        <span>CATEGORIES</span>
                    </MenuItem>
                </div>
            </div>
            <div className='lg:col-span-5 md:col-span-6'>
                {children}
            </div>
        </div>
    </>
}