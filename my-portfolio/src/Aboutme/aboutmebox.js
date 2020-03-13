import React, { Component } from 'react';
import '../App.css';
import aboutdata from '../Aboutme/aboutme.json';

class Aboutmebox extends Component {
    render (){   
      return (
              <div>
                {aboutdata.map((AboutmeDetail, index)=>{
                  return<div className="boxModel">
                      <h1>{AboutmeDetail.number}</h1>
                      <h1>{AboutmeDetail.number2}</h1>
                      <h1>{AboutmeDetail.number3}</h1>      
                    </div>
                })}
              </div>    
        )
      }
    }
  
  export default Aboutmebox