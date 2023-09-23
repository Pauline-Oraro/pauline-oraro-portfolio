

const ProjectsPage = () => {
    return (
        <div className="w-full my-32 mx-auto flex flex-wrap justify-center">
            <h1 className="text-center">PROJECTS<span className="text-5xl" style={{"color":"#d60b5c"}}>.</span></h1>
            <div className="projectContainer">
                <div className="projectCard">
                    <div className="projectHeader">
                        <img src="/src/images/note taking.png" alt="note taking app example"/>
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

                <div className="projectCard">
                    <div className="projectHeader">
                        <img  src="/src/images/todo-list.png" alt="todo list app example"/>
                    </div>
                    <div className="projectBody">
                    <h3>Todo List App</h3>
                    <hr></hr>
                        <p>This project is a Todo list app created using react. It allows users to create, edit, update and delete todo lists.</p>
                    </div>
                    <div className="projectFooter">
                        <button onClick={() => {window.open("https://todo-list-paulineoraro.netlify.app/")}}>DEMO</button>
                        <button onClick={() => {window.open("https://github.com/Pauline-Oraro/react-todo-list")}}>CODE</button>
                    </div>
                </div>

                <div className="projectCard">
                    <div className="projectHeader">
                        <img  src="/src/images/form.png" alt="login form example"/>
                    </div>
                    <div className="projectBody">
                    <h3>React Login Form </h3>
                    <hr></hr>
                        <p>Performs basic validation on the form fields and displays error messages when the user enters invalid data.</p>
                    </div>
                    <div className="projectFooter">
                        <button onClick={() => {window.open("https://react-login-form-one.vercel.app/")}}>DEMO</button>
                        <button onClick={() => {window.open("https://github.com/Pauline-Oraro/react-login-form")}}>CODE</button>
                    </div>
                </div>

                <div className="projectCard">
                    <div className="projectHeader">
                        <img  src="/src/images/quiz app.png" alt="javascript quiz app example"/>
                    </div>
                    <div className="projectBody">
                    <h3>Javascript Quiz App</h3>
                    <hr></hr>
                        <p>A user can select an option for each question and submit the quiz to see their score and review incorrect answers.</p>
                    </div>
                    <div className="projectFooter">
                        <button onClick={() => {window.open("https://pauline-oraro.github.io/javascript-quiz-app.github.io/")}}>DEMO</button>
                        <button onClick={() => {window.open("https://github.com/Pauline-Oraro/javascript-quiz-app.github.io")}}>CODE</button>
                    </div>
                </div>

                <div className="projectCard">
                    <div className="projectHeader">
                        <img  src="/src/images/price tag.png" alt="bootstrap tables example"/>
                    </div>
                    <div className="projectBody">
                    <h3>Pricing Table App</h3>
                    <hr></hr>
                        <p>This project is a responsive bootstrap pricing table example created using the container layout of bootstrap.</p>
                    </div>
                    <div className="projectFooter">
                        <button onClick={() => {window.open("https://pauline-oraro.github.io/bootstrap-pricing-table.github.io/")}}>DEMO</button>
                        <button onClick={() => {window.open("https://github.com/Pauline-Oraro/bootstrap-pricing-table.github.io")}}>CODE</button>
                    </div>
                </div>

                <div className="projectCard">
                    <div className="projectHeader">
                        <img  src="/src/images/tictac.png" alt="tictactoe example"/>
                    </div>
                    <div className="projectBody">
                    <h3>Tictactoe Game App</h3>
                    <hr></hr>
                        <p>This is a Tictactoe game created using react. The user plays the game until the winner can either be X or O.</p>
                    </div>
                    <div className="projectFooter">
                        <button onClick={() => {window.open("https://tic-tac-toe-game-pauline-oraro.netlify.app/")}}>DEMO</button>
                        <button onClick={() => {window.open("https://github.com/Pauline-Oraro/tic-tac-toe-game")}}>CODE</button>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center">More projects on my <button style={{"backgroundColor":"#b915cc", "boxShadow": "6px 6px 0px black"}} onClick={() => {window.open("https://github.com/Pauline-Oraro")}}>GITHUB</button></p>
            </div>
        </div>
    )
}

export default ProjectsPage;