import {useState} from "react";
import {Link} from "react-router-dom";
import {NavDropItem} from "../../utils/types";
import OutsideClickHandler from 'react-outside-click-handler';

const AppBar = (): JSX.Element => {

    // to be replaced with real data.
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
    const toggleDropdown = () => setDropdown(!isDropdownOpen)

    return (
        <div className={'static'}>
            <div className={'flex flex-row justify-between bg-[#4958A9] py-4 px-4'}>

                <div className={'flex flex-row items-center justify-between'}>
                    <NavItem title={'HOME'} link={'/'} />
                    <DropDownMenu onClick={toggleDropdown} title={'TECHNOLOGY'} open={isDropdownOpen} />
                    <NavItem title={'EXPLORE'} link={'/explore'} />
                </div>

                <Link to={'/'} className={'text-white bg-[#B71B3D] p-3 items-center flex flex-row rounded-[35px] font-medium   hover:drop-shadow-lg'}>
                    <span className={'material-icons text-white mr-1 font-medium'}>add</span>SUBMIT A PROJECT
                </Link>
            </div>

            {isDropdownOpen ?
                <OutsideClickHandler onOutsideClick={() => setDropdown(false)} >
                    <div className={'absolute bg-[#E3E1EC] w-[15%] p-2 ml-[3%] flex flex-col drop-shadow-lg divide-y'}>
                    { technologies.map((item, index) =>
                        <NavDropdownItem title={item.title} icon={item.icon} count={item.count} key={`drop_${index}`}/>) }
                    </div>
                </OutsideClickHandler>
            : <></>}

        </div>
    )
}

/**
 * @component: Top Nav Menu Item
 *
 * ## PROPS
 * @param title - label on the header item
 * @param link - url to navigate to upon click
 * */
const NavItem = ({ title, link}: any): JSX.Element => {
    return(
        <Link to={link} className={'text-xl text-white font-bold mx-4'}>
            { title }
        </Link>
    )
}

/**
 * @component: Top Nav Dropdown Sub-Item
 *
 * ## PROPS
 * @param title - label on the dropdown item
 * @param icon - location of tech stack icon
 * @param count - number of projects accepted
 * @param link - url to navigate to upon click
 * */
const NavDropdownItem = ({title, icon, count, link}: any) => {
    return (
        <Link to={link} className={'flex flex-row justify-between p-2 hover:cursor-pointer text-[#46464F]'}>
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
 *
 * ## PROPS
 * @param title - label on the header item
 * @param open - visibility of the dropdown list
 * @param onClick - callback for toggling visibility of dropdown list
 * */
const DropDownMenu = ({ title, open, onClick }: any) => {

    return(
        <div
            onClick={onClick}
            className={'flex flex-row items-center text-xl text-white font-bold hover:cursor-pointer mx-4'}>
            { title } <span className={'material-icons text-white ml-1'}>{ open ? "arrow_drop_up" : "arrow_drop_down" }</span>
        </div>
    )
}

export default AppBar;