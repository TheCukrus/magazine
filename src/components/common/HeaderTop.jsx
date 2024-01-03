import FacebookOutlinedIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import s from "../../assets/styles/HeaderTop.module.css"
import useMediaQuery from '@mui/material/useMediaQuery'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'


const HeaderTop = () =>
{
    const isSmallScreen = useMediaQuery('(max-width:600px)')

    return (
        <div className={s.contact_wrapper}>
            <section className={`${s.topContacts} ${s.custom_container}`}>
                <div className={s.icons}>
                    <a href="https://facebook.com"><FacebookOutlinedIcon fontSize="small" /></a>
                    <a href="https://linkedIn.com"><LinkedInIcon fontSize="small" /></a>
                    <a href="https://github.com"><GitHubIcon fontSize="small" /></a>
                </div>

                <div className={s.contacts}>
                    {isSmallScreen ? (
                        <>
                            <a href="#"><PhoneIcon fontSize="small" /></a>
                            <a href="#"><EmailIcon fontSize="small" /></a>
                        </>
                    ) : (
                        <>
                            <a href="#">+123 456 7910</a>
                            <a href="#">support.magazine@gmail.com</a>
                        </>
                    )}
                </div>
            </section>
        </div>
    )
}

export default HeaderTop