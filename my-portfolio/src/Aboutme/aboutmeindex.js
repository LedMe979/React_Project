import React, { Component } from 'react';
import '../App.css';
import aboutData from '../Aboutme/aboutme.json';

class Aboutme extends Component {
render (){   
  return (
        <div>
          {aboutData.map((AboutmeDetail, index)=>{
            return<div>
                <p>{AboutmeDetail.text}</p>
              </div>
          })}
        <div>
          {aboutData.map((AboutmeDetail, index)=>{
             return<div>
                <hr></hr>
                <p>{AboutmeDetail.text}</p>
              </div>
          })}
        </div>
      </div>  
    )
  }
}

export default Aboutme 
