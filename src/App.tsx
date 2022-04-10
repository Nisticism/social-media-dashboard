import React, { useState } from 'react';
import './App.css';
import Header from './containers/Header';
import LargeCardList from './containers/LargeCardList';
import SmallCardList from './containers/SmallCardList';

function App() {
  const [largeCards, setCards] = useState([{id: 1, username: '@test1', data_value: 2000, data_type: "followers", 
    change: 103, theme: "facebook", selected: false, has_increased: true, expanded: false, 
    extra_data: "Your facebook is doing very well... Go see for yourself!", url: "https://www.facebook.com"}, {id: 2, username: '@test2', data_value: 30000, data_type: "followers", 
    change: 11654, theme: "twitter", selected: false, has_increased: false, expanded: false, 
    extra_data: "Your twitter is doing very well... Go see for yourself!", url: "https://www.twitter.com"}, {id: 3, username: '@test3', data_value: 500, data_type: "followers", 
    change: 802, theme: "instagram", selected: false, has_increased: true, expanded: false, 
    extra_data: "Your instagram is doing very well... Go see for yourself!", url: "https://www.instagram.com"}, {id: 4, username: '@test4', data_value: 800, data_type: "subscribers", 
    change: 35, theme: "youtube", selected: false, has_increased: false, expanded: false, 
    extra_data: "Your youtube is doing very well... Go see for yourself!", url: "https://www.youtube.com"}]);
  const [smallCards, setSmallCards] = useState([
    {id: 1, data_value: 200, data_type: "Page Views", 
  change: 106, theme: "facebook", selected: false, has_increased: true}, {id: 2, data_value: 300, data_type: "Likes", 
  change: 113, theme: "facebook", selected: false, has_increased: false}, {id: 3, data_value: 50000, data_type: "Likes", 
  change: 80, theme: "twitter", selected: false, has_increased: false}, {id: 4, data_value: 800, data_type: "Profile Views", 
  change: 35, theme: "twitter", selected: false, has_increased: true}, {id: 5,  data_value: 200, data_type: "Retweets", 
  change: 10, theme: "instagram", selected: false, has_increased: true}, {id: 6,  data_value: 300, data_type: "Likes", 
  change: 11, theme: "instagram", selected: false, has_increased: false}, {id: 7,  data_value: 500, data_type: "Likes", 
  change: 8099, theme: "youtube", selected: false, has_increased: true}, {id: 8,  data_value: 800, data_type: "Total Views", 
  change: 35, theme: "youtube", selected: false, has_increased: true}]);
  const [colorThemes, setColorTheme] = useState([{darkTheme: true, lightTheme: false}]);
  return (
    <div className="app-background">
      <Header props={{className: "app-header", followers: 1298312}}/>
      <LargeCardList props = {{largeCards: largeCards, className: "app-container"}} />
      <SmallCardList props = {{smallCards: smallCards, className: "app-container"}} />
    </div>
  );
}

export default App;
