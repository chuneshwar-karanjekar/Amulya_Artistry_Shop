import React from 'react'
import Layout from "../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
 <div className="content">
        <div className="container">
          <h3 className="heading mb-4">Let's talk about everything!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas debitis, fugit natus?</p>
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="row justify-content-center">
          <div className="img-cont col-md-6">
                  <div className='img-container'></div>                                    
          </div>
          <div className="col-md-6">
            <form className="mb-5" method="post" id="contactForm" >
              <div className="row">
                <div className="col-md-12 form-group">
                  <input type="text" className="form-control"  id="name" placeholder="Your name" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <input type="text" className="form-control" id="email" placeholder="Email" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <input type="text" className="form-control" id="subject" placeholder="Subject" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <textarea className="form-control"  id="message" cols={30} rows={7} placeholder="Write your message" defaultValue={""} />
                </div>
              </div>
              <div className="row">
                <div className="col-12 ">
                  <input type="submit" defaultValue="Send Message" className="btn btn-primary rounded-0 py-2 px-4" />
                  <span className="submitting" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </Layout>
  )
}

export default Contact
