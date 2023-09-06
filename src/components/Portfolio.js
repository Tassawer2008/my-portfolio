function Portfolio(){
    const portfoliolistitems = [{
        id : "1",
        category : "Development",
        title : "Getting tickets to the big show",
        image : "portfolio-1.jpg",
        link : "portfolio-1"
    },
    {
        id : "2",
        category : "Development",
        title : "Getting tickets to the big show",
        image : "portfolio-2.jpg",
        link : "portfolio-2"
    },
    {
        id : "3",
        category : "Development",
        title : "Getting tickets to the big show",
        image : "portfolio-3.jpg",
        link : "portfolio-3"
    },
    {
        id : "4",
        category : "Development",
        title : "Getting tickets to the big show",
        image : "portfolio-4.jpg",
        link : "portfolio-4"
    },
    {
        id : "5",
        category : "Development",
        title : "Getting tickets to the big show",
        image : "portfolio-3.jpg",
        link : "portfolio-5"
    },
    {
        id : "6",
        category : "Development",
        title : "Getting tickets to the big show",
        image : "portfolio-4.jpg",
        link : "portfolio-6"
    }
];
    const portfolioitems = portfoliolistitems.map((portfoliolistitem)=>
        <div key={portfoliolistitem.id}  className="col-lg-4 col-md-6 col-sm-6 col-12 text-center">
            <div className={`single-portfolio portfolio-${portfoliolistitem.id} d-flex align-items-end rounded`}>
                <div className="thumbnail" style={{backgroundImage : `url(${portfoliolistitem.image})`}}>
                    
                </div>
                <div className="content z-1 mx-auto pb-5">
                    <p>{portfoliolistitem.category}</p>
                    <h3>{portfoliolistitem.title}</h3>
                    <a href={portfoliolistitem.link} className="header_btn">View Details</a>
                </div>
            </div>
        </div>
        
    )
    return(
        <section className="portfolio_sec bg_color--1" id="portfolio">
            <div className="row">
                <div className="section-title text-center">
                    <h2>My Latest Project</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
            </div>
            <div className="row portfolios-row">
                {portfolioitems}
            </div>
        </section>
    );
}

export default Portfolio;