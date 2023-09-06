import "../css/Mainpage.css"
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Service from "../components/Service";

function Mainpage(){
    return(
    <div className="mainpage">
        <Header />
        <Home />
        <About />
        <Service />
        <Portfolio />
        <Blog />
        <Contact />
        <Footer />
    </div>)
}
export default Mainpage;