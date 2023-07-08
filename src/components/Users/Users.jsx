import React from "react";
import styles from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/NoAvatar.png'
import { NavLink } from "react-router-dom";


let Users = (props) => {

    const TOTAL_UI_BUTTONS_COUNT = 10;
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    
    if(curPL<TOTAL_UI_BUTTONS_COUNT)curPL=TOTAL_UI_BUTTONS_COUNT;
    let slicedPages = pages.slice(curPF, curPL);
    
    return <div className={styles.wrapper}>
        <div className={styles.buttonsWrapper}>
            {
                slicedPages.map(p => {
                    return <button onClick={(e) => { props.onPageChanged(p); }} className={props.currentPage === p ? `${styles.selectedPage}` : `${styles.pageButton}`}>{p}</button>
                })
            }
        </div>
        {            
            props.usersPage.users.map(u => <div key={u.id} className={styles.Wrapper}>
                <div className={styles.userWrapper}>
                    <NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.ava}></img></NavLink>
                    <div className={styles.description}>
                        <p className={styles.name}>{u.name}</p>
                        <p className={styles.status}>{"u.location.city"}</p>
                        <p className={styles.info}>{"u.location.country"}</p>
                    </div>
                    {u.followed ?
                        <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                withCredentials:true,
                                headers: {
                                    "API-KEY":"868a0dd9-a097-443d-9cf8-7cc1c9eeb484"
                                }  
                            }).then(response => {
                                if(response.data.resultCode==0)props.unfollow(u.id)                     
                            });                             
                            }} className={styles.buttonUnfollow}>UnFollow</button> :
                        <button onClick={() => {
     
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                withCredentials:true,
                                headers: {
                                    "API-KEY":"868a0dd9-a097-443d-9cf8-7cc1c9eeb484"
                                }                                
                            }).then(response => {
                                debugger
                                if(response.data.resultCode==0)props.follow(u.id)                     
                            });                        
                            }} className={styles.buttonFollow}>Subscribe</button>}
                </div>
            </div>)
        }
    </div>
}

export default Users;