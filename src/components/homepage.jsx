import Text from "./text";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const HomePage = () => {
    return(
        <div className="container mx-auto px-4 py-44 text-center h-auto">
            <h2 className="text-7xl mb-0">HI.I AM PAULINE ORARO</h2>
            <Text />
            <button onClick={() => {window.open("https://github.com/Pauline-Oraro");}}className='socailmediabtn'>
                <AiFillGithub className='icon' />
            </button>
            <button onClick={() => {window.open("https://www.instagram.com/pauline_in_tech/");}}className='socailmediabtn'>
                <AiFillInstagram className='icon' />
            </button>
            <button onClick={() => {window.open("https://www.linkedin.com/in/pauline-oraro-0a2381274/");}}className='socailmediabtn'>
                <FaLinkedinIn className='icon' />
            </button>
        </div>
    )
}

export default HomePage;