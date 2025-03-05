
import Marquee from "react-fast-marquee";
import { skillData } from "../data/skillsData";
import { skillImage } from "../utils/skillsImage";


const AboutPage = () => {
    return (
        <div className=" skills container mx-auto my-36">
            <h3 className="text-center mb-12"><span style={{"backgroundColor":"#d60b5c", "boxShadow": "5px 5px 0px black"}}>ABOUT</span> ME</h3>
            <p className="text-2xl pl-3.5">I am a dedicated Web Developer with a passion for creativity and a strong foundation in modern web technologies, I specialize in crafting visually appealing and user-friendly websites that deliver exceptional user experiences. With 2 years of experience in the industry, I have honed my skills in HTML, CSS, JavaScript, Responsive design and S.E.O to seamlessly translate design concepts into functional and engaging web interfaces. I thrive on staying current with industry trends and best practices to consistently deliver high-quality results. I am committed to delivering high-quality solutions that not only meet client needs but also enhance usability and performance. </p>
            <div className="skillsContainer">
                <h3 className="mb-12 text-center">MY <span style={{"backgroundColor":"#b915cc", "boxShadow": "5px 5px 0px black"}}>SKILLS</span></h3>
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
            <div className="mt-12">
                <h3 className="mb-12 text-center"><span style={{"backgroundColor":"#052240", "boxShadow": "5px 5px 0px black"}}>SERVICES</span> THAT I OFFER</h3>
                <div className="serviceContainer">
                <div className="serviceCard">
                    <h4 className="text-center mb-3">Responsive Web design</h4>
                    <p className="text-2xl"> I ensure that websites work seamlessly on various devices and screen sizes, including desktops, tablets, and smartphones.</p>
                </div>
                <div className="serviceCard">
                    <h4 className="text-center mb-3">Frontend Development</h4>
                    <p className="text-2xl"> I write clean and well-structured HTML and CSS code to build the foundation of web pages. This includes optimizing code for performance and accessibility. I also implement interactive features and functionality using JavaScript and various libraries or frameworks like React and Redux. </p>
                </div>
                <div className="serviceCard">
                    <h4 className="text-center mb-3">S.E.O Optimization</h4>
                    <p className="text-2xl">I implement on-page SEO best practices, including optimizing meta tags, structured data, and improving website speed for better search engine rankings.</p>
                </div>
                <div className="serviceCard">
                    <h4 className="text-center mb-3">Cross-Browser Compatibility</h4>
                    <p className="text-2xl">I test and ensure that websites work correctly on different web browsers like Chrome, Firefox, Safari, and Edge.</p>
                </div>
                <div className="serviceCard">
                    <h4 className="text-center mb-3">Code Quality and Testing</h4>
                    <p className="text-2xl">I write clean, maintainable code and conduct testing (unit, integration, and end-to-end) to ensure the quality and reliability of web applications.</p>
                </div>
                <div className="serviceCard">
                    <h4 className="text-center mb-3">Web Content Writing Creation</h4>
                    <p className="text-2xl">I craft content that is optimized for search engines so to improve the website&apos;s search engine rankings.</p>
                </div>
                <div className="serviceCard">
                    <h4 className="text-center mb-3">Graphic Design</h4>
                    <p className="text-2xl">I am a creative and detail-oriented Graphic Designer with a solid foundation in design principles and I have experience in creating visually compelling designs for a wide range of media, including print, digital, and web.</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;