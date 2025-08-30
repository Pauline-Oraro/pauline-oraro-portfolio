import noteTaking from '/src/assets/images/note taking.png'
import connectify from '../assets/images/connectify.png'
import resume from '../assets/images/resume.png'
import movies from '../assets/images/movies.png'



const ProjectsPage = () => {
    return (
        <div className="w-full my-48 mx-auto flex flex-col items-center justify-center" id='projects'>
            <h1 className="text-center">PROJECTS<span className="text-5xl" style={{"color":"#d60b5c"}}>.</span></h1>
            <div className="projectContainer">
                <div className="projectCard">
                    <div className="projectHeader">
                        <img src={connectify} alt="connectify app "/>
                    </div>
                    <div className="projectBody">
                    <h3>Connectify ~ Social Media Web App</h3>
                    <hr></hr>
                        <p>Connectify is a dynamic social media web application built with React, Vite, Supabase, TailwindCSS, and TypeScript, designed to deliver smooth performance, real-time interaction, and a sleek user experience.</p>
                    </div>
                    <div className="projectFooter">
                        <button onClick={() => {window.open("https://connectify-teal.vercel.app/")}}>DEMO</button>
                        <button onClick={() => {window.open("https://github.com/Pauline-Oraro/connectify")}}>CODE</button>
                    </div>
                </div>

                <div className="projectCard">
                    <div className="projectHeader">
                        <img src={resume} alt="AI-powered Resume Analyzer example"/>
                    </div>
                    <div className="projectBody">
                    <h3>AI-powered Resume Analyzer built with React & Puter.js.</h3>
                    <hr></hr>
                        <p>The AI-Powered Resume Analyzer is a web application designed to evaluate resumes using artificial intelligence. Built with React for a fast, dynamic user interface and Puter.js for AI processing.</p>
                    </div>
                    <div className="projectFooter">
                        <button onClick={() => {window.open("https://ai-resume-analyzer-six-pi.vercel.app/")}}>DEMO</button>
                        <button onClick={() => {window.open("https://github.com/Pauline-Oraro/AI-Resume-Analyzer")}}>CODE</button>
                    </div>
                </div>

                <div className="projectCard">
                    <div className="projectHeader">
                        <img src={movies} alt="movie app example"/>
                    </div>
                    <div className="projectBody">
                    <h3>Movieverse ~ A Modern React Movie App</h3>
                    <hr></hr>
                        <p>Movieverse is a sleek and interactive web application built with React, designed for movie lovers to explore films effortlessly. It provides a modern browsing experience with smooth navigation, dynamic content, and real-time updates.</p>
                    </div>
                    <div className="projectFooter">
                        <button onClick={() => {window.open("https://movieverse-react-delta.vercel.app/")}}>DEMO</button>
                        <button onClick={() => {window.open("https://github.com/Pauline-Oraro/movieverse-react")}}>CODE</button>
                    </div>
                </div>

                <div className="projectCard">
                    <div className="projectHeader">
                        <img src={noteTaking} alt="note taking app example"/>
                    </div>
                    <div className="projectBody">
                    <h3>Note Taking App</h3>
                    <hr></hr>
                        <p>A Note taking app created using react-redux. It allows users to create, edit, update and delete notes.</p>
                    </div>
                    <div className="projectFooter">
                        <button onClick={() => {window.open("https://note-taking-app-pauline-oraro.netlify.app/")}}>DEMO</button>
                        <button onClick={() => {window.open("https://github.com/Pauline-Oraro/note-taking-react-redux-app")}}>CODE</button>
                    </div>
                </div>

                
                
            </div>
            <div>
                <p className="text-center">More projects on my <button style={{"backgroundColor":"#d60b5c", "boxShadow": "6px 6px 0px black"}} onClick={() => {window.open("https://github.com/Pauline-Oraro")}}>GITHUB</button></p>
            </div>
        </div>
    )
}

export default ProjectsPage;