import React,{useState} from 'react'
import Layout from '../../components/Layout'


const Register = () => {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ address, setAddress ] = useState("");

  // form function reload 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, phone, address);
    alert("register complete");
  };

  return (
    <Layout>
      <section className="vh-200">
  <div className="container h-200">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: 25}}>
          <div className="card-body ">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register With Amulya</p>
                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <div className="form-outline flex-fill mb-0">
                            <input type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="form-control" placeholder='Your Name' required/>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                            <input type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="form-control" placeholder='Email' required />                     
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                            <input type="password"
                               value={password}
                              onChange={(e)=>setPassword(e.target.value)}
                              className="form-control" placeholder='Password' required />                     
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                            <input type="number"
                               value={phone}
                              onChange={(e)=>setPhone(e.target.value)}
                              className="form-control" placeholder='Phone Number' min="10" required />
                    </div>
                   </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                            <input type="text"
                       value={address}
                              onChange={(e)=>setAddress(e.target.value)}
                              className="form-control" placeholder='Address' required />
                    </div>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                  </div>
                </form>
              </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                     <img src="/assets/amulya_3.jpg" alt='Image not found' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </Layout>
  )
}

export default Register
