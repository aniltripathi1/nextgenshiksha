import React from 'react';
import './Skill.css';

const Skill = () => {
    return (
    <div className="course_banner">
      <h1 className="course_heading" id='heads'>Skill Enhancement Course</h1>
      <div className="non_tech">
        <table className="course_table">
          <tbody>
            <tr>
            <td className="course_video_labeling">Learn Farming</td>
              <td className="course_video_labeling">Learn Electronic Repair</td>
              <td className="course_video_labeling">Learn Cooking</td>
              
            </tr>
            <tr>

              <td>
                <iframe height="300" width="400" 
                  src="https://www.youtube.com/embed/O0iQbCf-A_M"
                  title="Learn English"
                ></iframe>
              </td>
              <td>
                <iframe height="300" width="400" 
                  src="https://www.youtube.com/embed/aJZyOkxs37g"
                  title="Learn Python"
                ></iframe>
              </td>
              <td>
                <iframe height="300" width="400" 
                  src="https://www.youtube.com/embed/zhI7bQyTmHw"
                  title="Learn Excel"
                ></iframe>
              </td>
            </tr>
            <tr>
              <td className="course_video_labeling">Learn Bike Mechanic</td>
              <td className="course_video_labeling">Learn Art & Craft</td>
              <td className="course_video_labeling">Small Business Ideas</td>
            </tr>
            <tr>
              <td>
                <iframe height="300" width="400" 
                  src="https://www.youtube.com/embed/imkSzvGI01I"
                  title="Learn Excel"
                ></iframe>
              </td>
              <td>
                <iframe height="300" width="400" 
                  src="https://www.youtube.com/embed/c-N89CQOJ_A"
                  title="Learn English"
                ></iframe>
              </td>
              <td>
                <iframe height="300" width="400" 
                  src="https://www.youtube.com/embed/uv87Sa8JP20"
                  title="Learn Python"
                ></iframe>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className="course_heading" id='heads' >Technical courses</h1>
      <div className="tech_videos">
        <table className="course_table">
          <tbody>
          <tr>
              <td className="course_video_labeling">Learn Excel</td>
              <td className="course_video_labeling">Learn English</td>
              <td className="course_video_labeling">Learn Python</td>
            </tr>
            <tr>
              <td>
                <iframe height="300" width="400" 
                  src="https://www.youtube.com/embed/Vl0H-qTclOg"
                  title="Learn Excel"
                ></iframe>
              </td>
              <td>
                <iframe height="300" width="400" 
                  src="https://www.youtube.com/embed/kCMYfcjqlvI"
                  title="Learn English"
                ></iframe>
              </td>
              <td>
                <iframe height="300" width="400" 
                  src="https://www.youtube.com/embed/_uQrJ0TkZlc"
                  title="Learn Python"
                ></iframe>
              </td>
            </tr>
           
            <tr>
              <td className="course_video_labeling">Full Stack Development</td>
              <td className="course_video_labeling">Learn Digital Marketing</td>
              <td className="course_video_labeling">Learn Economics</td>
            </tr>
            <tr>
              <td>
                <iframe height="300" width="400" 
                  src="https://www.youtube.com/embed/kjBvQWHk_KI"
                  title="Learn Excel"
                ></iframe>
              </td>
              <td>
                <iframe  height="300" width="400" 
                  src="https://www.youtube.com/embed/G6DmDqYLWL8"
                  title="Learn English"
                ></iframe>
              </td>
              <td>
                <iframe height="300" width="400" 
                  src="https://www.youtube.com/embed/Rb5V1wcx4Fg"
                  title="Learn Python"
                ></iframe>
              </td>
            </tr>
            
            <tr></tr>
          </tbody>
        </table>
      </div>
     
    </div>
  );
}

export default Skill;