import { Link } from "react-router-dom";
import Text from "./text";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const HomePage = () => {
    return(
        <div className="homepage container mx-auto mt-44">
            <div className="homepageText">
                <h2 className="text-4xl mb-0 text-center">HI.I AM <span style={{"backgroundColor":"#052240","boxShadow":"6px 6px black"}}>PAULINE</span> ORARO</h2>
                <Text />
                <div className="homeButtons">
                    <button className="homepageButton" onClick={() =>{window.open("https://drive.google.com/file/d/1-QrppYu8FCL2YOAsJbkcEyritn-wqXFq/view?usp=drive_link")}}>RESUME</button>
                    <button className="homepageButton"> 
                        <Link to="/contact">CONTACT ME</Link>
                    </button>
                </div>
                <div className="homepageSocials">
                <button onClick={() => {window.open("https://github.com/Pauline-Oraro")}}className='socailmediabtn'>
                <AiFillGithub className='icon' />
            </button>
            <button onClick={() => {window.open("https://www.instagram.com/pauline_in_tech/")}}className='socailmediabtn'>
                <AiFillInstagram className='icon' />
            </button>
            <button onClick={() => {window.open("https://www.linkedin.com/in/pauline-oraro-0a2381274/")}}className='socailmediabtn'>
                <FaLinkedinIn className='icon' />
            </button>
            </div>
            </div>
            <div className="homepageImage">
                <img src="/pauline.jpg" className="profileImage" alt="pauline oraro" />
            </div>
        </div>
    )
}

export default HomePage;