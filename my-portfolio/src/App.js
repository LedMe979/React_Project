import React, { Component } from 'react';
import Aboutme from './Aboutme/aboutmeindex';
import Aboutmebox from './Aboutme/aboutmebox';
import './App.css';


class App extends Component {
render (){   
  return (
      <div className="box1">
        <div className="secondContainer">
          <div className="containerEdit">
              <Aboutme />
            </div>
            <div>
              <Aboutmebox /> 
            </div>  
        </div>
        <div className="box1">
        <div className="secondContainer">
          <div className="containerEdit">
            </div>
            <div className="containerEdit">
            </div>  
        </div>
      </div>
      </div>                
    )
  }
}

export default App;
