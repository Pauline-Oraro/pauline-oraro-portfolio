import {AiFillWechat, AiFillPhone} from "react-icons/ai"
import {BsFillEnvelopeAtFill} from "react-icons/bs";


const ContactPage = () =>{
    return (
        <div className="mx-auto my-44">
            <div className="contactContainer">
            <div className="contactDetails">
            <h3 className="text-center"><span style={{"backgroundColor":"#d60b5c", "boxShadow": "5px 5px 0px black"}}>CONTACT</span> ME</h3>
            <p className="text-2xl">Thank you for visiting my portfolio. If you have any inquiries, project proposals, or just want to say hello, feel free to get in touch with me. I am always open to new opportunities and collaborations.</p>
                <div className="contactIcon">
                    <p className="mb-2"><AiFillWechat/>+254 769696761</p>
                    <p className="mb-2"><AiFillPhone/> +254 769696761</p>
                    <p className="mb-2" style={{letterSpacing:"-2px"}}><BsFillEnvelopeAtFill/>hiltrapauline@gmail.com</p>
                </div>
            </div>
            <div className="contactForm">
            <form className="form" action="https://formspree.io/f/mleyjvzp" method="POST">
                <label htmlFor="name">NAME:</label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                required />

                <label htmlFor="email">EMAIL:</label>
                <input 
                type="text" 
                id="email" 
                name="email" 
                required/>

                <label htmlFor="email">SUBJECT:</label>
                <input 
                type="text" 
                id="subject" 
                name="subject" 
                required/>
                
                <label htmlFor="message">MESSAGE:</label>
                <textarea 
                id="message" 
                rows="3" 
                cols="24" 
                name="message" 
                required>
                </textarea>

                <button className="submit" type="submit" style={{"backgroundColor":"#052240"}}>SUBMIT</button>
            </form>
            </div>
            </div>
            <div className="mt-12">
                <h3 className="text-center mb-12"><span style={{"backgroundColor":"#b915cc", "boxShadow": "5px 5px 0px black"}}>FREQUENTLY</span> ASKED QUESTIONS.</h3>
                <div className="contactQuestions">
                    <div className="questionTab">
                        <input 
                        type="checkbox"
                        id="questionOne"
                        
                        />
                        <label htmlFor="questionOne" className="tab-label">What is frontend web development?</label>
                        <div className="answerTab">
                            <p>Frontend web development involves creating the visual elements and user interface of websites that users interact with directly. It focuses on HTML, CSS, and JavaScript to build a responsive and user-friendly website.</p>
                        </div>
                    </div>

                    <div className="questionTab">
                        <input 
                        type="checkbox"
                        id="questionTwo"
                        
                        />
                        <label htmlFor="questionTwo" className="tab-label">What technologies do you specialize in as a frontend web developer?</label>
                        <div className="answerTab">
                            <p>I specialize in HTML, CSS, JavaScript, and popular frontend libraries and frameworks like React and Redux. I also have experience with responsive design, CSS preprocessors like Sass and experience in Bootstrap and Tailwind </p>
                        </div>
                    </div>

                    <div className="questionTab">
                        <input 
                        type="checkbox"
                        id="questionThree"
                        
                        />
                        <label htmlFor="questionThree" className="tab-label">Do you have experience with responsive web design?</label>
                        <div className="answerTab">
                            <p>Yes, I have extensive experience in creating responsive web designs that adapt to various screen sizes and devices. This ensures a consistent and user-friendly experience across desktops, tablets, and smartphones.</p>
                        </div>
                    </div>

                    <div className="questionTab">
                        <input 
                        type="checkbox"
                        id="questionFour"
                        
                        />
                        <label htmlFor="questionFour" className="tab-label">Can you explain your process for creating a website?</label>
                        <div className="answerTab">
                            <p>My process typically begins with understanding the project requirements and goals.  After that, I start coding the frontend using HTML, CSS, and JavaScript. Finally, I conduct thorough testing and optimization to ensure the website is fast and responsive across devices.</p>
                        </div>
                    </div>

                    <div className="questionTab">
                        <input 
                        type="checkbox"
                        id="questionFive"
                        
                        />
                        <label htmlFor="questionFive" className="tab-label"> How do you stay updated with the latest frontend technologies and trends?</label>
                        <div className="answerTab">
                            <p>I am committed to continuous learning and staying up-to-date with industry trends. I regularly follow blogs, attend web development conferences, and participate in online communities to learn from and share knowledge with fellow developers.</p>
                        </div>
                    </div>

                    <div className="questionTab">
                        <input 
                        type="checkbox"
                        id="questionSix"
                        
                        />
                        <label htmlFor="questionSix" className="tab-label">Can you provide examples of websites you have worked on?</label>
                        <div className="answerTab">
                            <p>Certainly! You can find examples of my work in the projects section of this website. I have worked on a variety of projects that demonstrate my versatility as a frontend developer.</p>
                        </div>
                    </div>

                    <div className="questionTab">
                        <input 
                        type="checkbox"
                        id="questionSeven"
                        
                        />
                        <label htmlFor="questionSeven" className="tab-label"> How can I get in touch with you to discuss a project or job opportunity?</label>
                        <div className="answerTab">
                            <p>You can contact me through the contact form on this website, or you can reach out to me via email which is stated above. I am always open to discussing new projects and opportunities.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ContactPage;