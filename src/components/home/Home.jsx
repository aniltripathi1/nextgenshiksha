import React , {useEffect} from "react";
import  hero from "../images/hero.png"
import "./Home.css"
import Typed from "typed.js";
import News from "../news/News";

import Newsletter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";




const Home= () => {

  useEffect(() => {
    var typed = new Typed("._text", {
      strings: ["Quality Education", "Mentorship", "Communication"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  
  return(
    <>

      <section id="header12" className="d-flex  align-items-center">
      <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
        <div className="row">
       <div className=" _text-content col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
        <h1 className="h1_home">Welcome to <strong className="brand-name-1">Next Gen Shiksha</strong> </h1>
        <h3> Enpowering Rural India Through<br/><span className="_text"></span></h3>
        <h2 className="my-3" id= 'home-text'>
        NextGenShiksha, an innovative website that aims to empower Rural India with the ability to communicate effectively, think critically, and  equip learners with the tools they need to succeed.
        </h2>
        <div className="home-sci">
              <a href="https://www.google.com/">Teachers</a>
              <a href="https://www.google.com/">Parents</a>
              
            </div>
        <div className="mt-3">
         <a href="https://www.google.com/" className="btn-get-started _btn-box"> More About Next Gen Shiksha</a>
        </div>
       </div>
       <div className="col-lg-6 order-1 order-lg-2 _header-img">
        <img src ={hero} className="img-fluid _animated" alt="hero-img" />
       </div>
       </div>
        </div>
        </div>
        </div>

      </section>

      <News/>
   
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Home;



