import s from "../assets/styles/Home.module.css"
import { Link } from "react-router-dom"
import coffe from "../assets/images/coffee.jpg"
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

const Home = () =>
{
    return (
        <section className={`${s.custom_container} ${s.grid_container}`}>

            <div className={`${s.news_label} ${s.item_one}`}>
                <div className={s.image_container}>
                    <img src={coffe} alt="coffe cup" />
                </div>
                <div className={s.news_content}>
                    <ul>
                        <li className={s.news_category}>Food Habit</li>
                        <Link to="/image" className={s.news_title}>A Discount Toner Cartridge Is Better Than Ever</Link>
                        <li className={s.news_action}><PermIdentityIcon /> Mark wiens <CalendarMonthIcon /> 03 April, <ChatBubbleOutlineIcon /> 2018 06 Comments</li>
                    </ul>
                </div>
            </div>

            <div className={`${s.news_label} ${s.item_two}`}>
                <div className={s.image_container}>
                    <img src={coffe} alt="coffe cup" />
                </div>
                <div className={s.news_content}>
                    <ul>
                        <li className={s.news_category}>Food Habit</li>
                        <Link to="/image" className={s.news_title}>A Discount Toner Cartridge Is Better Than Ever</Link>
                        <li className={s.news_action}><PermIdentityIcon /> Mark wiens <CalendarMonthIcon /> 03 April, <ChatBubbleOutlineIcon /> 2018 06 Comments</li>
                    </ul>
                </div>
            </div>

            <div className={`${s.news_label} ${s.item_three}`}>
                <div className={s.image_container}>
                    <img src={coffe} alt="coffe cup" />
                </div>
                <div className={s.news_content}>
                    <ul>
                        <li className={s.news_category}>Food Habit</li>
                        <Link to="/image" className={s.news_title}>A Discount Toner Cartridge Is Better Than Ever</Link>
                        <li className={s.news_action}><PermIdentityIcon /> Mark wiens <CalendarMonthIcon /> 03 April, <ChatBubbleOutlineIcon /> 2018 06 Comments</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Home