import Menu from "./Menu";
import Socialicon from "./Socialicon";
import { Link } from "react-router-dom";

function Header(){
    return(
        <section className="header_sec z-2">
            <header>
                <div className="inner_header">
                    <div className="logo_menu">
                        <Link to="/"> <img src="./logo-symbol-dark.png" alt="logo" /></Link>
                        <Menu />
                    </div>
                    <div className="header_social">
                        <div className="social_share_div">
                            <Socialicon />
                        </div>
                            <Link to="/admin/dashboard" className='header_btn'>Dashboard</Link>
                    </div>
                </div>
            </header> 
        </section>
    );
}
export default Header;