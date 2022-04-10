import React, { useState } from 'react'
import FacebookIcon from '../assets/icon-facebook.svg';
import TwitterIcon from '../assets/icon-twitter.svg';
import InstagramIcon from '../assets/icon-instagram.svg';
import YoutubeIcon from '../assets/icon-youtube.svg';
import UpArrow from '../assets/icon-up.svg';
import DownArrow from '../assets/icon-down.svg';
import '../App.css';
import styles from './LargeCard.module.css';


export default function LargeCard({ largeCard }:any) {
  function getIcon() {
    switch (largeCard.theme) {
      case "facebook": return FacebookIcon;
      case "twitter": return TwitterIcon;
      case "instagram": return InstagramIcon;
      case "youtube": return YoutubeIcon;
      default: return FacebookIcon;
    }
  }

  function getBorderClass(media:string) {
    switch (media) {
      case "facebook": return styles['facebook-border'];
      case "twitter": return styles['twitter-border'];
      case "instagram": return styles['instagram-border'];
      case "youtube": return styles['youtube-border'];
      default: return styles['facebook-border'];
    }
  }

  const [isExpanded, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(!isExpanded);
  };

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
    <div className={[`${isExpanded ? styles["expanded"] : styles["collapsed"]}`,"card","large-card","card-background"].join(' ')} 
    onClick={toggleExpand}>
      <div className={`${getBorderClass(largeCard.theme)} ${largeCard.expanded ? styles["expanded"] : ''}`}>
        <div className={`${largeCard.theme === "instagram" ? styles["instagram-padding"] : styles["default"]}`}>
          <img src={getIcon()} alt="icon" className="icon-right"></img>
          <span className={`${styles["username-text"]} "card-text"`}>{largeCard.username}</span>
        </div>
        <div className="top-20">
          <span className={styles['data-value']}>{formatNumber(largeCard.data_value)}</span>
        </div>
        <span className={styles['data-type']}>{largeCard.data_type}</span>
        <div className="center top-15 bottom-15">
          <img src={getChangeIcon(largeCard.has_increased)} alt="change icon" className="icon-right"/>
          <span className={`${getChangeClass(largeCard.has_increased)} ${styles.change}`}>{largeCard.change} Today</span>
        </div>
        {isExpanded && 
          <span className={styles["extra-data"]}>
              <div>
                <span className={styles["extra-text"]}>{largeCard.extra_data}</span>
              </div>
            <div className="top-10">
              <a className="link-color" href={largeCard.url} target="_blank" rel="noreferrer">Visit</a>
            </div>
          </span>
        }
      </div>
    </div>
  )
}