import {Link} from "react-router-dom";

const Footer = (): JSX.Element => {
    return (
        <div className={'bg-[#E7E7EC] py-4 px-4 flex flex-row items-center fixed inset-x-0 bottom-0'}>
            <FooterLink title={'About'} link={'/about'}/>
            <FooterDivider/>
            <FooterLink title={'Terms'} link={'/terms'}/>
            <FooterDivider/>
            <FooterLink title={'Privacy'} link={'/privacy'}/>
            <FooterDivider/>
            <FooterLink title={'Feedback'} link={'/feedback'}/>
        </div>
    )
}

/**
 * @component: Footer Menu Item
 *
 * ## PROPS
 * @param title - label on the footer item
 * @param link - url to navigate to upon click
 * */
const FooterLink = ({title, link}: any):JSX.Element => {
    return (
        <Link to={link} className={'font-light text text-l'}>
            {title}
        </Link>
    )
}

/**
 * @component: Footer Menu Separator
 * */
const FooterDivider = (): JSX.Element => {
    return (
        <div className={'w-[5px] h-[5px] border-[2px] mx-[30px] bg-[#BAD7E9] p-[2.5px] rounded-[35px]'}>
        </div>
    )
}

export default Footer