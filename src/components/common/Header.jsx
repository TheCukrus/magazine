import React from "react"
import FacebookOutlinedIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import SearchIcon from '@mui/icons-material/Search'
import s from "../../assets/styles/Header.module.css"
import Container from '@mui/material/Container'
import useMediaQuery from '@mui/material/useMediaQuery'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'

const Header = () =>
{
    const isSmallScreen = useMediaQuery('(max-width:600px)')

    return (
        <div className={s.container}>
            {/* Section where is contacts*/}
            <div className={s.contact_wrapper}>
                <section className={`${s.topContacts} ${s.custom_container}`}>
                    <div className={s.icons}>
                        <p><FacebookOutlinedIcon fontSize="small" /></p>
                        <p><LinkedInIcon fontSize="small" /></p>
                        <p><GitHubIcon fontSize="small" /></p>
                    </div>

                    <div className={s.contacts}>
                        {isSmallScreen ? (
                            <>
                                <p><PhoneIcon fontSize="small" /></p>
                                <p><EmailIcon fontSize="small" /></p>
                            </>
                        ) : (
                            <>
                                <p>+37067850633</p>
                                <p>sssgustavsss@gmail.com</p>
                            </>
                        )}
                    </div>
                </section>
            </div>
            {/* Logo */}
            <section className={s.logo}>
                <div className={s.custom_container}>
                    <h1>Magazine</h1>
                </div>
            </section>

            {/* Navigation bar */}
            <Container className={s.stickyNav}>
                <nav className={s.mainNav}>
                    <a href="/">HOME</a>
                    <a href="/archive">ARCHIVE</a>
                    <a href="/category">CATEGORY</a>
                    {/* Dropdown menu for Post Types */}
                    <a href="/image">Image Post</a>
                    <a href="/about">ABOUT</a>
                    <a href="/contact">CONTACT</a>
                    <SearchIcon className={s.searchIcon} />
                </nav>
            </Container>
        </div >
    )
}

export default Header