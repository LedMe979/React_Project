import React, { Component } from 'react';
import '../App.css';
import aboutData from '../Aboutme/aboutme.json';

class Aboutme extends Component {
render (){   
  return (
        <div>
          <div>
            {aboutData.map((AboutmeDetail, index)=>{
              return<div>
                  <p>{AboutmeDetail.text}</p>
                </div>
            })}
          </div>
          <hr></hr>     
      </div>  
    )
  }
}

export default Aboutme
