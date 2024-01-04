import React from "react"
import s from "../../assets/styles/HeaderWrap.module.css"
import logo from "../../assets/images/logo.png"
import { useNavigate } from "react-router-dom"

const HeaderWrap = () =>
{
    const home = useNavigate()
    return (
        <section className={s.logo}>
            <div className={s.custom_container}>
                <img onClick={() => home("/")} className={s.logoImage} src={logo} alt="logo" />
                <h1 onClick={() => home("/")}>Magazine</h1>
            </div>
        </section>
    )
}

export default HeaderWrap