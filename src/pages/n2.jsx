import React, { useState } from 'react';
 // Axios 인스턴스 가져오기
import { Navbar } from '../components/Navbar';
  // useNavigate import
import "../css/pages/n1.css";


const N1= () => {
  
  return (
    <>
        <Navbar title="빈강의실" />
        <div className="n1_container">
            {/* Your content goes here */}
        </div>
        <div className="label-container">
            <div className="label label-exit"></div>
            <span className="label-text">입출구</span>

            <div className="label label-stairs" style={{ marginLeft: '20px' }}></div>
            <span className="label-text">계단</span>
        </div>
    </>
  );
};

export default N1;
