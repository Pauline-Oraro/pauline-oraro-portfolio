import Typewriter from "typewriter-effect";


const Text = () =>{
    return(
        <Typewriter
        options={{
        strings: [
            "Web Developer",
            "Frontend Developer",
            "Backend Developer",
            "Graphic Designer",
            "UI Designer",
            "S.E.O Specialist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        }}
    />
    )
}

export default Text;