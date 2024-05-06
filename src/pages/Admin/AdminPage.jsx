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
        <div className={'pt-16 grid lg:grid-cols-[1fr,5fr] md:grid-cols-[1fr,3fr] gap-2 h-lvh overflow-hidden'}>
            <div className={'md:flex relative flex-col flex-1 pt-0 min-h-0 border-r border-black-500 hidden'}>
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
            {children}
        </div>
    </>
}