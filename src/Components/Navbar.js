import {React, Component} from "react"
import "./Navbar.css"

class Navbar extends Component {
  render() {
    return <nav className="site-Navbar">
        <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#CurrentLibrary">Current Library</a></li>
            <li><a href="#Requests">Requests</a></li>
            <li><a href="#Help">Help</a></li>
            <li><a href="#ContactUs">Contact Us</a></li>
        </ul>
    </nav>
  }
};

export {Navbar};