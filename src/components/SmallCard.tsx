import React from 'react'
import FacebookIcon from '../assets/icon-facebook.svg';
import TwitterIcon from '../assets/icon-twitter.svg';
import InstagramIcon from '../assets/icon-instagram.svg';
import YoutubeIcon from '../assets/icon-youtube.svg';
import UpArrow from '../assets/icon-up.svg';
import DownArrow from '../assets/icon-down.svg';
import '../App.css';
import styles from './SmallCard.module.css';

export default function SmallCard({ smallCard }:any) {
  function getIcon() {
    switch (smallCard.theme) {
      case "facebook": return FacebookIcon;
      case "twitter": return TwitterIcon;
      case "instagram": return InstagramIcon;
      case "youtube": return YoutubeIcon;
    }
  }
  function getChangeIcon(change:boolean) {
    let icon = (change ? UpArrow : DownArrow);
    return icon;
  }
  function getChangeClass(change:boolean) {
    let icon = (change ? styles['increase'] : styles['decrease']);
    return icon;
  }
  function formatNumber(num:number) {
    return num > 9999 ? (num/1000).toString() + "k" : num;
  }
  return (
    <div className="card card-background top-20 bottom-15 transition">
        <div className="center-vertically space-between left-20 right-20 transition">
          <span className={styles["data-type-text"]}>{smallCard.data_type}</span>
          <img src={getIcon()} alt="icon" className="icon-float-right"></img>
        </div>
        <div className="center-vertically space-between left-20 right-20 top-20">
          <span className={styles["data-value"]}>{formatNumber(smallCard.data_value)}</span>
          <div className="center-vertically center-horizontally">
            <img src={getChangeIcon(smallCard.has_increased)} alt="change icon" className="icon-right"/>
            <span className={`${getChangeClass(smallCard.has_increased)} ${styles["change-text"]}`}>{smallCard.change}%</span>
          </div>
        </div>
    </div>
  )
}