function Blog(){
    const blogitems = [{
        id : "1",
        category : "Development",
        title : "Getting tickets to the big show",
        image : "blog-01.jpg",
        link : "blog-1"
    },
    {
        id : "2",
        category : "Management",
        title : "A big ticket gone to be an interesting ",
        image : "blog-02.jpg",
        link : "blog-2"
    },
    {
        id : "3",
        category : "Design",
        title : "The Home of the Future Could Bebes",
        image : "blog-03.jpg",
        link : "blog-3"
    }
];
    const bloglist = blogitems.map((blogitem)=>
        <div key={blogitem.id} className="col-lg-4 col-md-6 col-sm-6 col-12 text-left">
            <div className={`single-blog blog-${blogitem.id} d-flex align-items-end rounded`}>
                <div className="thumbnail" style={{backgroundImage : `url(${blogitem.image})`}}>
                    
                </div>
                <div className="content z-1 mx-auto py-5 px-3">
                    <p>{blogitem.category}</p>
                    <h3>{blogitem.title}</h3>
                    <a href={blogitem.link} className="header_btn">Read More</a>
                </div>
            </div>
        </div>
        
    )
    return(
        <section className="blog_sec bg_color--2" id="blog">
            <div className="row">
                <div className="section-title text-center">
                    <h2>Latest News</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
            </div>
            <div className="row blog-row">
                {bloglist}
            </div>
        </section>
    );
}

export default Blog;