import AboutTabs from "./AboutTabs";

function About(){
    return(
        <section id="about" className="about-sec bg_color--1">
            <div className="row row--35">
                <div className="col-lg-5">
                    <img src="../about-8.jpg" alt="about" className="w-100 rounded-3 px-2"></img>
                </div>
                <div className="col-lg-7">
                    <div className="section-title">
                        <h2 className="title">About Me</h2>
                        <p className="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered & alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
                    </div>
                    <div className="about_tabs pt-4">
                        <AboutTabs />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;