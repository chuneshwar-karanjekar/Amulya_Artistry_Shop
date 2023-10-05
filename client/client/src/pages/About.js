import React from "react";
import Layout from "../components/Layout";
import {BsFacebook,BsInstagram,BsLinkedin,BsGithub} from "react-icons/bs"
import { Link } from "react-router-dom";
const About = () => {
  return (
    <Layout>
      <section className="team">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Team Alpha</h2>
            <div className="underline"></div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus</p>
          </div>

          <div className="row">
            {/* Team Member 1 */}
            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="teampic">
                  <img className="img-fluid" src="/assets/ck.jpg" alt="team1"/>
              </div>
                <div className="member-info">
                  <h4>Chuneshwar karanjekar</h4>
                  <span>Team Leader | Project Manager</span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.</p>
                
                <div className="social">
                 <Link hrefLang="#"><BsFacebook/></Link>
                 <Link hrefLang="#"><BsInstagram/></Link>
                 <Link hrefLang="#"><BsLinkedin/></Link>
                 <Link hrefLang="#"><BsGithub/></Link>
                </div>
                </div>
              </div>
            </div>
{/* Team Member 2 */}
            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="teampic">
                  <img className="img-fluid" src="/assets/ck.jpg" alt="team1"/>
                </div>
                <div className="member-info">
                  <h4>Chuneshwar karanjekar</h4>
                  <span>Team Leader | Project Manager</span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.</p>
               
                <div className="social">
                 <Link hrefLang="#"><BsFacebook/></Link>
                 <Link hrefLang="#"><BsInstagram/></Link>
                 <Link hrefLang="#"><BsLinkedin/></Link>
                 <Link hrefLang="#"><BsGithub/></Link>
                  </div>
                  </div>
              </div>
            </div>
{/* team member 3 */}
          <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="teampic">
                  <img className="img-fluid" src="/assets/ck.jpg" alt="team1"/>
                </div>
                <div className="member-info">
                  <h4>Chuneshwar karanjekar</h4>
                  <span>Team Leader | Project Manager</span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.</p>
                
                <div className="social">
                 <Link hrefLang="#"><BsFacebook/></Link>
                 <Link hrefLang="#"><BsInstagram/></Link>
                 <Link hrefLang="#"><BsLinkedin/></Link>
                 <Link hrefLang="#"><BsGithub/></Link>
                </div>
                </div>
              </div>
            </div>
{/* team member 4 */}
<div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="teampic">
                  <img className="img-fluid" src="/assets/ck.jpg" alt="team1"/>
                </div>
                <div className="member-info">
                  <h4>Chuneshwar karanjekar</h4>
                  <span>Team Leader | Project Manager</span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.</p>
               
                <div className="social">
                 <Link hrefLang="#"><BsFacebook/></Link>
                 <Link hrefLang="#"><BsInstagram/></Link>
                 <Link hrefLang="#"><BsLinkedin/></Link>
                 <Link hrefLang="#"><BsGithub/></Link>
                  </div>
                  </div>
              </div>
            </div>

{/* team member 5 */}
            <div className="last-member col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="teampic">
                  <img className="img-fluid" src="/assets/ck.jpg" alt="team1"/>
                </div>
                <div className="member-info">
                  <h4>Chuneshwar karanjekar</h4>
                  <span>Team Leader | Project Manager</span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.</p>
               
                <div className="social">
                 <Link hrefLang="#"><BsFacebook/></Link>
                 <Link hrefLang="#"><BsInstagram/></Link>
                 <Link hrefLang="#"><BsLinkedin/></Link>
                 <Link hrefLang="#"><BsGithub/></Link>
                  </div>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
