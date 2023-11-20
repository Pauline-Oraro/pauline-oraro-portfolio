import Typewriter from "typewriter-effect";


const Text = () =>{
    return(
        <Typewriter
        options={{
        strings: [
            "Frontend Web Developer",
            "Frontend Consultant",
            "S.E.O Specialist",
            "Web Content Writer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        }}
    />
    )
}

export default Text;