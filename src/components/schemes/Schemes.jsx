import React, { Component } from 'react'
import './Schemes.css';
import img1 from "./agriculture sih.jpeg"
import img2 from "./healthcare sih.avif"
import img3 from "./edu2.jpg"
import img4 from "./social welfare sih.jpg"
import img5 from "./energy ih.jpg"
import img6 from "./egov2.webp"
import Footer from '../footer/Footer';

 const Schemes = ()=>{
    return (
      <>
      <div className="_container">
       <h1 className='schemes-h1' >Agriculture</h1>
   
        <div className="_part">
        
         <div className="_imgs">
        <img className="_scheme-image"  src={img1}/>
        </div>
        <div className="_items">
        <ul>
        <li><a className='schmes-img' href="https://vikaspedia.in/agriculture/policies-and-schemes/crops-related/pradhan-mantri-kisan-sampada-yojana">Pradhan Mantri Kisan Sampada Yojana - Prime Minister's Agriculture Processing Scheme</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/agriculture/agri-insurance/pradhan-mantri-fasal-bima-yojana">Pradhan Mantri Fasal Bima Yojana - Prime Minister's Crop Insurance Scheme</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/agriculture/policies-and-schemes/crops-related/pradhan-mantri-krishi-sinchai-yojana">Pradhan Mantri Krishi Sinchai Yojana - Prime Minister's Irrigation Scheme</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/agriculture/market-information/market-information-related-websites">National Agriculture Market (NAM) - National Agricultural Market</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/agriculture/market-information/market-information-related-websites">Paramparagat Krishi Vikas Yojana - Traditional Agriculture Development Scheme</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/agriculture/policies-and-schemes/livestock-poultry-related/national-livestock-mission">National Livestock Mission - National Livestock Program</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/pagelinks">Know Your Eligible Scheme - Scheme Eligibility Information</a></li>
        </ul>
        </div>
    
    </div>
    <h1 className='schemes-h1' >Health</h1>

    <div className="_part1">
        
         <div className="_imgs">
         <img className="_scheme-image"  src={img2}/>
         </div>
         <div className="_items">
         <ul>
        <li><a className='schmes-img' href="https://vikaspedia.in/health/health-campaigns/pradhan-mantri-surakshit-matritva-abhiyan">Pradhan Mantri Surakshit Matritva Abhiyan - Prime Minister's Safe Motherhood Campaign</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/health/nrhm/national-health-programmes-1/janani-shishu-suraksha-karyakram">Janani Shishu Suraksha Karyakaram - Mother and Child Protection Program</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/health/nrhm/national-health-mission">National Health Mission - National Health Initiative</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/health/nrhm/national-health-programmes-1/mission-indhradhanush">Mission Indhradhanush - Mission Rainbow</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/health/nrhm/national-health-programmes-1/pradhan-mantri-swasthya-suraksha-yojana-pmssy">Pradhan Mantri Swasthya Suraksha Yojana (PMSSY) - Prime Minister's Health Protection Scheme</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/health/nrhm/national-health-programmes-1/national-ayush-mission-nam">National Ayush Mission - National Traditional Medicine Mission</a></li>
       </ul>
       </div>
       </div>


    <h1 className='schemes-h1' >Education</h1>
    <div className="_part">
        
         <div className="_imgs">
         <img className="_scheme-image"  src={img3}/>
         </div>
         <div className="_items">
    <ul>
        <li><a className='schmes-img' href="https://vikaspedia.in/education/policies-and-schemes/scholarships">Scholarships and Awards - Educational Scholarships and Awards</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/education/policies-and-schemes/scholarships">National Scholarship Portal - National Scholarship Platform</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/education/policies-and-schemes/national-sports-talent-search-scheme">National Sports Talent Search Scheme - National Sports Talent Search Program</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/education/policies-and-schemes/mid-day-meal-scheme">Mid Day Meal Scheme - Midday Meals Program</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/education/policies-and-schemes/scholarships/post-matric-scholarship/inspire-programme">INSPIRE Programme - Innovation in Science Pursuit for Inspired Research Program</a></li>
    </ul>
    </div>
    </div>

    <h1 className='schemes-h1' >Social Welfare</h1>
    <div className="_part1">
        
         <div className="_imgs">
         <img className="_scheme-image"  src={img4}/>
         </div>
         <div className="_items">
    <ul>
        <li><a className='schmes-img' href="https://vikaspedia.in/social-welfare/women-and-child-development/women-development-1/pradhan-mantri-matru-vandana-yojana">Pradhan Mantri Matru Vandana Yojana - Prime Minister's Maternity Blessing Scheme</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/social-welfare/rural-poverty-alleviation-1/schemes/national-rurban-mission-nrum">Shyama Prasad Mukherji Rurban Mission (SPMRM) - Shyama Prasad Mukherjee Rural-Urban Mission</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/social-welfare/financial-inclusion/pradhan-mantri-mudra-yojana">Pradhan Mantri Mudra Yojana - Prime Minister's Micro-Enterprise Development Scheme</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/social-welfare/urban-poverty-alleviation-1/schemes-urban-poverty-alleviation/pradhan-mantri-awas-yojana-housing-for-all-urban">Pradhan Mantri Awas Yojana (Housing for All - Urban) - Prime Minister's Housing Scheme for Urban Areas</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/social-welfare/social-security/pradhan-mantri-suraksha-bima-yojana">Pradhan Mantri Suraksha Bima Yojana - Prime Minister's Accident Insurance Scheme</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/social-welfare/social-security/atal-pension-yojana">Atal Pension Yojana (APY) - Atal Pension Scheme</a></li>
    </ul>
    </div>
    </div>

    <h1 className='schemes-h1' >Energy</h1>
    <div className="_part">
        
         <div className="_imgs">
         <img className="_scheme-image"  src={img5}/>
         </div>
         <div className="_items">
    <ul>
        <li><a className='schmes-img' href="https://vikaspedia.in/energy/policy-support/pradhan-mantri-ujjwala-yojana">Pradhan Mantri Ujjwala Yojana - Prime Minister's Clean Cooking Scheme</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/energy/policy-support/energy-efficiency/domestic-efficient-lighting-programme-delp">UJALA Programme - Unnat Jyoti by Affordable LEDs for All Program</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/energy/policy-support/renewable-energy-1/suryamitra-skill-development-programme">Suryamitra Skill Development Programme - Solar Friend Skill Development Program</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/energy/policy-support/ujwal-bharat">Ujwal Bharat - Bright India</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/energy/policy-support/renewable-energy-1/schemes">Renewable Energy Related Schemes - Schemes Related to Renewable Energy</a></li>
    </ul>
    </div>
    </div>

    <h1 className='schemes-h1' >E-Governance</h1>
    <div className="_part1">
        
         <div className="_imgs">
         <img className="_scheme-image"  src={img6}/>
         </div>
         <div className="_items">
    <ul>
        <li><a className='schmes-img' href="https://vikaspedia.in/e-governance/digital-payment">Digital Payments - Electronic Payments</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/e-governance/digital-india/digilocker">DigiLocker - A Digital Locker System for Citizens - DigiLocker - A Digital Document Storage System for Citizens</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/e-governance/digital-india/esign-2013-online-digital-signature-service#section-7">e-Sign - Online Digital Signature Service - e-Sign - Online Digital Signature Service</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/e-governance/digital-india/national-digital-literacy-mission">Pradhan Mantri Gramin Digital Saksharta Abhiyan - Prime Minister's Rural Digital Literacy Program</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/e-governance/online-citizen-services/government-to-citizen-services-g2c/all-about-aadhaar">All About Aadhaar - Comprehensive Information about Aadhaar</a></li>
        <li><a className='schmes-img' href="https://vikaspedia.in/social-welfare/senior-citizens-welfare/jeevan-pramaan-2013-an-aadhar-based-digital-life-certificate-for-pensioners?searchterm=jeevan+">Jeevan Parmaan</a></li>
    </ul>
    </div>
    </div>
    
    </div>
<Footer/>
      </>
    )
  }

export default Schemes;