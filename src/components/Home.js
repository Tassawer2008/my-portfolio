function Home(){
    return(
        <section className="home_sec" id="home" style={{backgroundImage : "url(../bg-image-28.jpg)"}}>
            <div className="row">
                <div className="col">
                    <h4>Welcome to my world</h4>
                    <h1>
                        Hi,  I'm Jone Doe <br />
                        <div className="movingtext"><span style={{color:"#f9004d"}}>Web Developer.</span></div>
                        
                    </h1>
                    <h2>based in USA.</h2>
                </div>
            </div>
        </section>
    );
}

export default Home;