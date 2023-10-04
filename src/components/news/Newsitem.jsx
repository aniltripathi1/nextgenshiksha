import React, { Component } from 'react'
import "./News.css"
export class Newsitem extends Component {
    render() {
       let {title,description,imageurl}=this.props;

        return (
            <>
                
                <div className="card" id='cards' style={{width: "32rem h-100"}}>
                    <div id ="imageee">
                    <img src={imageurl} className="card-img-top" alt="..."/>
                </div>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="newsitem_card-text">{description}</p>
                            <a href="/" id='btnnn' className="btn btn-sn btn-primary">Read More</a>
                        </div>
                </div>
            </>
        )
    }
}

export default Newsitem
