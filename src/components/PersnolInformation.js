function PersnolInformation() {
    return (
        <div className="persnol-info-form">
            <h2>Persnol Information</h2>
            <form>
                <div className="form-row d-flex flex-wrap">
                    <div className="form-group col-md-6">
                        <label>Name</label>
                        <input type="text" className="form-control" id="inputName4" placeholder="Full Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Position</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="Position" />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="test@gmail.com" />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Phone</label>
                        <input type="text" className="form-control" id="inputPhone4" placeholder="0301-23456789" />
                    </div>
                    <div className="form-group col-md-12">
                        <label >Address</label>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control" id="inputCity" placeholder="City" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control" id="inputState" placeholder="State" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control" id="inputCountry" placeholder="Country" />
                    </div>
                    <div className="form-group col-md-3">
                        <label>Facebook</label>
                        <input type="text" className="form-control" id="inputFacebook" placeholder="https://www.facebook.com/" />
                    </div>
                    <div className="form-group col-md-3">
                        <label>Linked In</label>
                        <input type="text" className="form-control" id="inputLinkedIn" placeholder="https://www.linkedin.com/" />
                    </div>
                    <div className="form-group col-md-3">
                        <label>Instagram</label>
                        <input type="text" className="form-control" id="inputInstagram" placeholder="https://www.instagram.com/" />
                    </div>
                    <div className="form-group col-md-3">
                        <label>Twitter</label>
                        <input type="text" className="form-control" id="inputTwitter" placeholder="https://www.twitter.com/" />
                    </div>
                    <div className="form-group col-md-12">
                        <label>About Me</label>
                        <textarea type="text" className="form-control" id="inputAbout" placeholder="There are many variations of passages" rows="6" />
                    </div>
                    <div className="form-group col-md-12">
                        <button type="submit" className="btn">Save</button>
                    </div>
                    
                </div>
                
            </form>
        </div>
    )
}

export default PersnolInformation;