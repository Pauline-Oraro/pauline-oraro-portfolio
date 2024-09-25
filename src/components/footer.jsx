import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa"

const Footer = () =>{
    return (
        <div className="footer w-full bottom m-0">
            <div className="footerSection">
                <p>&copy;Pauline Oraro 2024</p>
                

                <div className="footerSocials">
                <button onClick={() => {window.open("https://github.com/Pauline-Oraro");}}className='socailmediabtn'>
                <AiFillGithub className='icon' />
            </button>
            <button onClick={() => {window.open("https://www.linkedin.com/in/pauline-oraro-0a2381274/");}}className='socailmediabtn'>
                <FaLinkedinIn className='icon' />
            </button>
                </div>

            </div>
        </div>
    )
}

export default Footer;