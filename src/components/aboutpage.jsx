
import Marquee from "react-fast-marquee";
import { skillData } from "../data/skillsData";
import { skillImage } from "../utils/skillsImage";


const AboutPage = () => {
    return (
        <div className=" skills container mx-auto my-44" id="about">
            <h3 className="text-center mb-12"><span style={{"backgroundColor":"#d60b5c", "boxShadow": "5px 5px 0px black"}}>ABOUT</span> ME</h3>
            <p className="text-2xl p-9 mb-12">I am Pauline Oraro, a professional Full Stack Web Developer passionate about creating high-performing digital experiences that blend creativity with functionality. I specialize in building responsive interfaces with React, TypeScript, and Tailwind CSS, alongside secure backends using Node.js, Express, and MongoDB. With over two years of experience, I’ve mastered the full development lifecycle—from planning and design to coding and deployment—while ensuring security with API integration, database management, and authentication systems like JWT and OAuth. I stay current with industry trends to deliver solutions that are visually engaging, technically sound, and exceed client expectations.</p>
            <div className="skillsContainer">
                <h3 className="mb-12 text-center">MY <span style={{"backgroundColor":"#d60b5c", "boxShadow": "5px 5px 0px black"}}>SKILLS</span></h3>
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
            <div className="mt-44 mb-44">
                <h3 className="mb-12 text-center"><span style={{"backgroundColor":"#d60b5c", "boxShadow": "5px 5px 0px black"}}>SERVICES</span> THAT I OFFER</h3>
                <div className="serviceContainer">
                <div className="serviceCard">
                    <h4 className="text-center mb-3">Web Development</h4>
                    
                </div>
                <div className="serviceCard">
                    <h4 className="text-center mb-3">Frontend Development</h4>
                    
                </div>

                <div className="serviceCard">
                    <h4 className="text-center mb-3">Backend Development</h4>
                   
                </div>
                <div className="serviceCard">
                    <h4 className="text-center mb-3">Website Maintenance & S.E.O Optimization</h4>
                   
                </div>
                <div className="serviceCard">
                    <h4 className="text-center mb-3">API & Third-Party Integrations</h4>
                    
                </div>
                <div className="serviceCard">
                    <h4 className="text-center mb-3">Code Quality and Testing</h4>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;