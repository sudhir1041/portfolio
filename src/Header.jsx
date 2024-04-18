import { Link  } from "react-router-dom";
const Header=()=>{
    return(
        <>
        
        <nav className="nav">
            <h1>Portfolio</h1>
            <ul className="nav_list">
                <li>
                    <Link to="home" className="menu" >Home</Link>

                </li>
                <li>
                    <Link to="about" className="menu">About</Link>

                </li>
                
                <li>
                    <Link to="project" className="menu">Projects</Link>

                </li>
                <li>
                    <Link to="skill" className="menu">skill</Link>

                </li>
               
            </ul>
        </nav>
        <hr/>

        </>
    )
}

export default Header;