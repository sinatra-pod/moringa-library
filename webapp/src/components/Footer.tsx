import {Link} from "react-router-dom";

const Footer = (): JSX.Element => {
    return (
        <div className={'bg-[#E7E7EC] py-4 px-4 flex flex-row items-center'}>
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
        <div className={'w-[10px] h-[10px] border-[2px] mx-[30px] bg-[#2B3467] p-[5px] rounded-[35px]'}>

        </div>
    )
}

export default Footer