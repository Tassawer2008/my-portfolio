import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWordpressSimple, faShopify, faWix, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
function Service(){
    return(
        <section className="service_sec bg_color--2" id="service">
            <div className="row">
                <div className="section-title text-center">
                    <h2>My Awesome Service</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
            </div>
            <div className="row services-row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-left">
                    <div className="col-inner">
                        <div className="icon">
                        <FontAwesomeIcon icon={faDisplay} />
                        </div>
                        <div className="content">
                            <h3>Website Development</h3>
                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-left">
                    <div className="col-inner">
                        <div className="icon">
                        <FontAwesomeIcon icon={faWordpressSimple} />
                        </div>
                        <div className="content">
                            <h3>WordPress</h3>
                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-left">
                    <div className="col-inner">
                        <div className="icon">
                        <FontAwesomeIcon icon={faShopify} />
                        </div>
                        <div className="content">
                            <h3>Shopify</h3>
                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-left">
                    <div className="col-inner">
                        <div className="icon">
                        <FontAwesomeIcon icon={faWix} />
                        </div>
                        <div className="content">
                            <h3>Wix</h3>
                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-left">
                    <div className="col-inner">
                        <div className="icon">
                        <FontAwesomeIcon icon={faPhp} />
                        </div>
                        <div className="content">
                            <h3>PHP</h3>
                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-left">
                    <div className="col-inner">
                        <div className="icon">
                        <FontAwesomeIcon icon={faReact} />
                        </div>
                        <div className="content">
                            <h3>React</h3>
                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;