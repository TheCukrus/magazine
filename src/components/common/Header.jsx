import { useState } from "react"
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
    const [searchOpen, setSearchOpen] = useState(false)
    const isSmallScreen = useMediaQuery('(max-width:600px)')

    const toggleSearch = () => setSearchOpen(!searchOpen)

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
                                <a href="tel:+37067850633"><PhoneIcon fontSize="small" /></a>
                                <a href="mailto: sssgustavsss@gmail.com"><EmailIcon fontSize="small" /></a>
                            </>
                        ) : (
                            <>
                                <a href="tel:+37067850633">+37067850633</a>
                                <a href="mailto: sssgustavsss@gmail.com">sssgustavsss@gmail.com</a>
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
            <div className={`${s.stickyNav} ${s.custom_container}`}>
                <nav className={s.mainNav}>
                    <a href="/">HOME</a>
                    <a href="/archive">ARCHIVE</a>
                    <a href="/category">CATEGORY</a>
                    {/* Dropdown */}
                    <div className={s.dropdown}>
                        <button className={s.dropbtn}>POST TYPES</button>
                        <div className={s.dropdownContent}>
                            <a href="/standard">Standard Post</a>
                            <a href="/image">Image Post</a>
                            <a href="/gallery">Gallery Post</a>
                            <a href="/video">Video Post</a>
                            <a href="/audio">Audio Post</a>
                        </div>
                    </div>
                    <a href="/about">ABOUT</a>
                    <a href="/contact">CONTACT</a>
                    {/* Search bar */}
                    <div className={searchOpen ? `${s.search} ${s.open}` : s.search}>
                        <input type={searchOpen ? "text" : "hidden"} className={s.searchBar} />
                        <SearchIcon className={s.searchIcon} onClick={toggleSearch} />
                    </div>
                </nav>
            </div>
        </div >
    )
}

export default Header