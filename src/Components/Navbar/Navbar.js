import logo from "../images/logo.JPG";



export default function Navbar(){
    return (
        <navbar class="navbar">
            <div id="left"></div>
            <div id="center"><img alt="logo" src={logo}/></div>
            <div id="rigth"><ul>
                <li>Inicio</li>
                <li>Que hacemos</li>
                <li>Contactanos</li>
            </ul></div>
        </navbar>
        )
}

