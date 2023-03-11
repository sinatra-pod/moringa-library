import {useState} from "react";
import {Link} from "react-router-dom";
import {NavDropItem} from "../../utils/types";
import OutsideClickHandler from 'react-outside-click-handler';
const NavBar = () => {

    const technologies: NavDropItem[] = [
        {
            title: "Node.js",
            icon: "https://img.icons8.com/fluency/48/null/node-js.png",
            count: "100+"
        },
        {
            title: "Flutter",
            icon: "https://img.icons8.com/fluency/48/null/flutter.png",
            count: "12"
        },
        {
            title: "Python",
            icon: "https://img.icons8.com/fluency/48/null/python.png",
            count: "53+"
        },
    ]

    const [isDropdownOpen, setDropdown ] = useState(false)
    const toggleHoverMenu = () => setDropdown(!isDropdownOpen)

    return (
        <div className={'static'}>
            <div className={'flex flex-row justify-between bg-[#2B3467] py-4 px-4 w-[100%]'}>

                <div className={'flex flex-row items-center w-[20%] justify-between'}>
                    <NavItem title={'HOME'} link={'/'} />
                    <DropDownMenu
                        title={'TECHNOLOGY'}
                        hover={toggleHoverMenu}
                        open={isDropdownOpen}
                    />
                    <NavItem title={'EXPLORE'} link={'/'} />
                    <NavItem title={'ABOUT'} link={'/'} />
                </div>

                <Link to={'/'} className={'text-white bg-[#EB455F] p-3 items-center flex flex-row rounded-[35px] font-bold   hover:drop-shadow-md'}>
                    <span className={'material-icons text-white mr-1'}>add</span>SUBMIT A PROJECT
                </Link>
            </div>

            {isDropdownOpen ? <div className={'absolute bg-[#BAD7E910] w-[15%] p-2 ml-[3%] flex flex-col divide-y'}>
                <OutsideClickHandler onOutsideClick={() => setDropdown(false)} >
                    { technologies.map((item, index) =>
                        <NavDropdownItem title={item.title} icon={item.icon} count={item.count} key={`drop_${index}`}/>) }
                </OutsideClickHandler>
            </div> : <></>}

        </div>
    )
}

/**
 * @component: Top Nav Menu Item
 * */
const NavItem = ({ title, link}: any): JSX.Element => {
    return(
        <Link to={link} className={'text-xl text-white font-bold'}>
            { title }
        </Link>
    )
}

/**
 * @component: Top Nav Dropdown Sub-Item
 * */
const NavDropdownItem = ({title, icon, count, link}: any) => {
    return (
        <Link to={link} className={'flex flex-row justify-between p-2 hover:cursor-pointer'}>
            <div className={'items-center flex'}>
                <img src={icon} className={'mr-2'} alt={title}/>
                {title}
            </div>
                <div className={'items-center flex'}>
                    <p className={'bg-[#EB455F] px-2 py-1 text-white font-medium rounded-[35px]'}>{count}</p>
                </div>
        </Link>
    )
}

/**
 * @component: Top Nav Menu Item (Dropdown)
 * */
const DropDownMenu = ({ title, open, hover }: any) => {
    return(
        <div
            className={'flex flex-row items-center text-xl text-white font-bold hover:cursor-pointer'}
            onClick={() => hover ? hover(): null}>
            { title } <span className={'material-icons text-white ml-1'}>{ open ? "arrow_drop_up" : "arrow_drop_down" }</span>
        </div>
    )
}

export default NavBar;