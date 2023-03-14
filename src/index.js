import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { message: "Ya segodnya seriy", id: "0" },
  { message: "ee kak rulit", id: "1" },
  { message: "a zalubku ce zroblu a zalubky", id: "2" }
]

let dialogs = [
  { id: '0', name: 'Hrtntrue', url: 'https://samequizy.pl/wp-content/uploads/2018/03/filing_images_6ef20837c84b.jpeg', isActive: true },
  { id: '1', name: 'Slava', url: 'https://pbs.twimg.com/media/El_euloXEAEhl4X.jpg:large', isActive: false },
  { id: '2', name: 'Ivakhiv1', url: 'https://preview.redd.it/this-looks-like-irl-uncle-kesseli-v0-ye2ppfghqmj81.jpg?auto=webp&s=bdd454d4df1340c951c1401f852c4b972d92aae3', isActive: false },
  { id: '3', name: 'Custom4mo', url: 'https://www.racedepartment.com/attachments/fleetari3-png.430600/', isActive: false }
]

let messages = [
  { message: "Hi negros!", id: "0" },
  { message: "Hi negros AXE!", id: "1" },
  { message: "Ubili nekra!", id: "2" }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
