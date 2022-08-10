import {React, Component} from "react"
import { Navbar } from "./Components/Navbar";
import {Footer} from "./Components/Footer";

class App extends Component {
  render() {
    return <div>
      <Navbar />
      <h1>App</h1>
      <Footer />
    </div>
  }
};

export {App};