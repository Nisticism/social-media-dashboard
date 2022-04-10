import React, { useEffect, useState } from 'react'
import '../App.css';
import DarkMode from '../components/DarkMode';

export default function Header({props}:any) {
  function formatNumber(num:number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  const [isDesktop, setDesktop] = useState(window.innerWidth > 700);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 700);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  
  return (
    <div>
      {isDesktop ? (
        <div className={props.className}>
          <span className="center-vertically space-between header-container">
            <span className="secondary-font-color header-title">
              Social Media Dashboard
            </span>
            <div className="center-vertically">
              <span className="tertiary-font-color right-10 dark-mode-label">
                Dark Mode
              </span>
              <DarkMode/>
            </div>
          </span>
          <div>
            <span className="card-text total-followers">
              Total Followers: {formatNumber(props.followers)}
            </span>
          </div>   
        </div>
      ) : (
      <div className={props.className}>
        <span className="center-vertically space-between header-container">
          <span className="secondary-font-color header-title">
            Social Media Dashboard
          </span>
        </span>
        <div>
          <span className="card-text total-followers">
            Total Followers: {formatNumber(props.followers)}
          </span>
        </div>
        <hr/>
        <div className="center-vertically dark-mode-container">
            <h4 className="tertiary-font-color right-10">
              Dark mode
            </h4>
            <DarkMode/>
          </div>
      </div>
      )}
    </div>
  )
}