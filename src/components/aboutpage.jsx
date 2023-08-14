
import Marquee from "react-fast-marquee";
import { skillData } from "../data/skillsData";
import { skillImage } from "../utils/skillsImage";


const AboutPage = () => {
    return (
        <div className=" skills container mx-auto my-32">
            <h3>About me</h3>
            <p className="text-2xl">I am a dedicated Frontend Web Developer with a passion for creativity and a strong foundation in modern web technologies, I specialize in crafting visually appealing and user-friendly websites that deliver exceptional user experiences. With 2 years of experience in the industry, I have honed my skills in HTML, CSS, JavaScript, responsive design and S.E.O to seamlessly translate design concepts into functional and engaging web interfaces. I thrive on staying current with industry trends and best practices to consistently deliver high-quality results. Beyond my technical expertise, I am also a devoted Christian and a passionate web blogger, where I combine my faith with my love for technology by sharing insights, tutorials, and thought-provoking content to inspire and inform my readers. My goal is to contribute my skills, creativity, and enthusiasm to collaborate on innovative web projects that make a positive impact, while continually growing as a developer and sharing my journey with a wider audience.</p>
            <div className="skillsContainer">
                            <div className="skill-scroll">
                                <Marquee
                                    gradient={false}
                                    speed={60}
                                    pauseOnClick={true}
                                    delay={0}
                                    play={true}
                                    autoFill={false}
                                    direction="left"
                                >
                                    {skillData.map((skill, id) => (
                                        <div className="skill-box" key={id} >
                                            <img className='skill-image' src={skillImage(skill)} alt={skill} />
                                            <p className="skill-text">{skill}</p>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
            </div>
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
        </div>
    )
}

export default AboutPage;