import React, { Component } from 'react';
import Aboutme from './Aboutme/aboutmeindex';
import './App.css';


class App extends Component {
render (){   
  return (
      <div className="box1">
        <div className="secondContainer">
          <div className="containerEdit">
              <Aboutme />
            </div>
        </div>
      </div>      
    )
  }
}

export default App;
