import React, { Component } from 'react';
import Aboutme from './Aboutme/aboutmeindex';
import './App.css';


class App extends Component {
render (){   
  return (
      <div className="containerEdit">
        <div className="boxs">
          <Aboutme />
        </div>  
      </div>
    )
  }
}

export default App;
