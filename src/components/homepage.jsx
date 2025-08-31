
import Text from "./text";
import {
    AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const HomePage = () => {
    return(
        <div className="homepage container mx-auto mt-44" id="home">
            <div className="homepageText">
                <h2 className="text-4xl mb-0 text-center">HI.I AM <span style={{"backgroundColor":"#d60b5c","boxShadow":"6px 6px black"}}>PAULINE</span> ORARO</h2>
                <Text />
                <div className="homeButtons">
                    <button className="homepageButton" onClick={() =>{window.open("https://drive.google.com/file/d/10Rb7j1t0R4n_ToLEbfs2pjfqYjvsps6N/view?usp=sharing")}}>RESUME</button>
                    <button className="homepageButton"> 
                        <a href="#contact">CONTACT ME</a>
                    </button>
                </div>
                <div className="homepageSocials">
                <button onClick={() => {window.open("https://github.com/Pauline-Oraro")}}className='socailmediabtn'>
                <AiFillGithub className='icon' />
            </button>
            
            <button onClick={() => {window.open("https://www.linkedin.com/in/pauline-oraro-0a2381274/")}}className='socailmediabtn'>
                <FaLinkedinIn className='icon' />
            </button>
            </div>
            </div>
        </div>
    )
}

export default HomePage;