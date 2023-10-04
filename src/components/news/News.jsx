import React, { Component } from 'react'
import Newsitem from './Newsitem'
import "./News.css"
import { NavLink } from 'react-router-dom'
export class News extends Component {
    render() {
        return (
            <div className="container my-3" >
            
                <div className="card-heading">
                    <h1 className='h1_news'> Key <span className='news-decoration'>Elements </span></h1>
                </div>
                <div id='_newsrow' className="row">
                    <div className="col-md-4">
                        <Newsitem title="Languages" description="This section is specially created for learning new languages which helps to enhance your communication skills." imageurl="https://assets.telegraphindia.com/telegraph/2021/Dec/1639395218_02-5-1.jpg"/>
                    </div>
                    <div className="col-md-4">
                        <Newsitem title="Road Maps" description=" Confused about future? This section is going to help you with roadmaps by which you can get a direction to work on"imageurl="https://as1.ftcdn.net/v2/jpg/04/23/06/92/1000_F_423069262_6Zkh5NhzeI4l3xSOzNVfflck9n8kxNHu.jpg" />
                    </div>
                    <div className="col-md-4">
                    <NavLink to = "/skill">
                        <Newsitem title="Skills" description="Want to enhance your skills? This section is going to cater about the skills which you are interested in " imageurl="https://d1rbiogke1jwo5.cloudfront.net/wp-content/uploads/2022/07/On-World-Youth-Skills-Day-Vedanta-Aluminium-reaffirms-commitment-to-empowering-rural-youth-big.jpg"/>
                        </NavLink>
                    </div>
                    <div className="col-md-4" >
                        <Newsitem title="Academincs" description="Your one stop solution for all the study material required for acing your school exams"imageurl="https://media.istockphoto.com/id/1324689337/photo/indian-village-government-school-girls-operating-laptop-computer-system-at-rural-area-in-india.jpg?s=170667a&w=0&k=20&c=Sxgjtwi9D0aQ43-iz1mv-foMOvOqk_I4QcmfkoEbm80=" />
                    </div>
                    <div className="col-md-4">
                    <NavLink to ="/job">
                        <Newsitem title="Job Oppurtunities" description="You will get all the information about job opportunities  and Govt. Exam information under this section" imageurl=" https://media.istockphoto.com/id/1284350283/photo/young-indian-agronomist-showing-some-information-to-farmer-in-laptop-at-cotton-field.jpg?s=612x612&w=0&k=20&c=swro9dO1yoh9nbWvIkR9vhO2Yk5xAjlmIHtXYeSQZKI="/>
                   
                        </NavLink>
                         </div>
                    <div className="col-md-4">
                    <NavLink to="/schemes">
                        <Newsitem  title="Government schemes" description="This section covers maximum schemes given by our government for study loans etc" imageurl="https://assets.entrepreneur.com/content/3x2/2000/1683810874-echnology.jpg" />
                        </NavLink>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default News
