import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import './Newsletter.css';

const CarouselMultipleItems = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-5 " id="newsletter-h2">News<span className="newsletter-decoration">Letter</span></h2>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4">
                <div id ='newsletter_card' className="card" >
                  <img
                    src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/03/29/Photos/Opinion/schooling-ky0C--621x414@LiveMint.jpg"
                    className="card-img-top"
                    alt="Item 1"
                  />
                  <div className="card-body">
                    <h5  id ='_card-title'className="card-title">Right Age To start</h5>
                    <p className="card-text">
                      Every child is unique and different when it comes to their
                      abilities and capacities to adjust to a social environment.
                      The right age to start education for a child is when a child
                      is 3-5 years old. Many experts recommend enrolling children
                      in preschool at this age. This stage focuses on developing
                      essential social, emotional, and cognitive skills. This
                      brings up the interesting point of non-developed fine motor
                      coordination and neuromuscular skills at an early age.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="https://images.yourstory.com/cs/5/f02aced0d86311e98e0865c1f0fe59a2/indian-farmer-1610471656527.png?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces"
                    className="card-img-top"
                    alt="Item 2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Modern Farming</h5>
                    <p className="card-text">
                    Modern farming integrates technology, data, and sustainable practices to meet growing food demands. Smart machinery, AI, and IoT enable efficient crop management and resource allocation. Sustainable techniques like no-till farming and hydroponics conserve resources and reduce environmental impact. Genetic advancements produce resilient and high-yielding crops. Blockchain ensures transparent and secure supply chains, building consumer trust. Together, these elements make modern farming a vital solution for feeding a rapidly expanding global population while addressing ecological concerns.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="https://static.dw.com/image/60856921_804.jpg"
                    className="card-img-top"
                    alt="Item 3"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Rameshbabu Praggnanandhaa</h5>
                    <p className="card-text">
                    Rameshbabu Praggnanandhaa is a chess prodigy who became an international master at the age of 10, making him the youngest to achieve this feat at the time. His incredible talent and dedication have made him a rising star in the world of chess, inspiring aspiring young players worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="https://en-media.thebetterindia.com/uploads/2016/08/ms.-akang-thiumai.jpg"
                    className="card-img-top"
                    alt="Item 4"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Chizami, Nagaland</h5>
                    <p className="card-text">A Tiny Naga Village Has Been Spearheading Women’s Rights and Sustainable Farming for Almost a Decad, This model focuses on health issues, women’s rights, community programs, food security, and environmental conservation. Chizami Weaves today has a strong network of more than 300 women in Chizami and 10 other villages-</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="https://im.indiatimes.in/content/2021/Mar/mushroom-2_603f2f05ce88f.jpg?w=725&h=408"
                    className="card-img-top"
                    alt="Item 5"
                  />
                  <div className="card-body">
                    <h5 className="card-title">RK Binita Devi</h5>
                    <p className="card-text">RK Binita Devi is an inspirational figure in the world of mushroom farming, generating a monthly income exceeding Rs. 1.5 lakh. Her impact extends beyond her own success, as she provides employment opportunities to local individuals and imparts her knowledge of mushroom cultivation to others. Binita Devi's story serves as a motivating example for the youth in her state, encouraging them to explore the possibilities of mushroom farming as a viable and empowering livelihood.
</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/06/06/Pictures/niit-topper_995d12fe-698b-11e8-af35-5e950c6035ab.jpg"
                    className="card-img-top"
                    alt="Item 6"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Kalpana Kumari</h5>
                    <p className="card-text"> A Village girl from Bihar, secured first rank in the prestigious NEET (NATIONAL ELIGIBILITY CUM ENTRANCE TEST) for medical admissions. Kalpana Kumari a girl from a small village in Bihar aspires to work as a medical professional for a better tomorrow. She studied NCERT books along with coaching material and also appeared for various mock tests often.
</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ backgroundColor: "orange" }} // Apply the arrow styles here
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ backgroundColor: "orange" }} // Apply the arrow styles here
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
};

export default CarouselMultipleItems;