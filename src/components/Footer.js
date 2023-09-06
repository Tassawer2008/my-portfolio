import Socialicon from "./Socialicon";

function Footer(){
    return (
        <section className="footer_sec bg_color--2">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <img src="../logo-symbol-dark.png" alt="footer-logo"></img>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 social_col">
                    <div className="footer_social_icon">
                        <Socialicon />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <p>Copyright © 2022 Rainbow-Themes. All Rights Reserved.</p>
                </div>
            </div>
        </section>
    )
};

export default Footer;