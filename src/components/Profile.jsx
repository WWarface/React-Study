import React from 'react';

const Profile = () => {
    return (
        <div className='main-content'>
            <img className='main-content-image' src='https://i.ytimg.com/vi/V33G0n7dQVA/maxresdefault.jpg' />
            <div className='profile-container'>
                <div className='profile-picture-container'>
                    <img className='profile-picture' src='https://dota2.ru/img/heroes/pudge/portrait.jpg'></img>
                </div>
                <div className='profile-info-container'>
                    <h3 className='profile-name'>Pudge</h3>
                    <p>Date of birth: 2 january</p>
                    <p>City: Zhmerynka</p>
                    <p>Family Status: not married</p>
                    <p>Family Status: not married</p>
                </div>
            </div>
            <div className='posts-container'>
                <h3 className='posts-text'>My posts</h3>
                <input typeof='text' className="posts-input" value={'your news...'} onFocus="value=''"></input>
                <button className='posts-button'>Send</button>
                <div className='post-sent-container'>
                    <div className='circle'></div>
                    <p>Why nobody hook me</p>
                </div>
                <div className='post-sent-container'>
                    <div className='circle'></div>
                    <p>Why nobody hook me</p>
                </div>
                <div className='post-sent-container'>
                    <div className='circle'></div>
                    <p>Why nobody hook me</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;