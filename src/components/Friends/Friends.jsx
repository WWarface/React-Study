import React from 'react';
import Friend from './Friend/Friend';
import s from './Friends.module.css'


const Friends = (props) => {

    let friendsElements = props.friendDialogs.map(d => <Friend  name={d.name} url={d.url} key={d.id}/>)


    return(
        <div className={s.container}>
            <div className={s.title}><h2>Friends</h2></div>
            <div className={s.friendsContainer}>
                {friendsElements}
            </div>            
        </div>
    );
}

export default Friends;