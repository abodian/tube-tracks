import React, { Component } from 'react';
import { useState, useEffect } from 'react';

import "./Line.css";

function Line(props) {
    const { data } = props;
  
    if (!data) {
      return <div>Loading data...</div>;
    }
    
    const stationList = data.map((station) => {
        if (station.stationName === 'Walthamstow Central Underground Station') {
          setTimeout(() => {
            document.querySelector('.circle-red').remove(); // remove the circle-red div after 5 seconds
          }, 5000);
      
          return (
            <>
              <div key={station.id}>
                <div className='circle-red'></div>
              </div>
            </>
          );
        } else {
          return null; // skip all other entries
        }
      });
        
    return (
        <div>
            Victoria Line {stationList}
        </div>   
    );
  }
  
  
  
  export default Line;