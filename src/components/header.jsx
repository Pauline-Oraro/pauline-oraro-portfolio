

const Header = () =>{
    return (
        <div className="header">
            <span>
                <a href="/">
                    <img 
                    src="/Logo.png"
                    className="imgHeader"
                    />
                </a>
            </span>
            <input className="side-menu" type="checkbox" id="side-menu" name="menu"/>
            <label htmlFor="side-menu" className="hamb">
                <span className="hamb-line"></span>
            </label>
            <nav className="nav">
                <ul className="menu">
                    <li> <a href="#home">HOME</a> </li>
                    <li> <a href="#about">ABOUT</a> </li>
                    <li> <a href="#projects">PROJECTS</a> </li>
                    <li> <a href="#contact">CONTACT</a> </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;