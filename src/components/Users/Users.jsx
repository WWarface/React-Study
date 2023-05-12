import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/NoAvatar.png'


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
    debugger
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
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.ava}></img>
                    <div className={styles.description}>
                        <p className={styles.name}>{u.name}</p>
                        <p className={styles.status}>{"u.location.city"}</p>
                        <p className={styles.info}>{"u.location.country"}</p>
                    </div>
                    {u.isFollowed ?
                        <button onClick={() => { props.follow(u.id) }} className={styles.buttonUnfollow}>UnFollow</button> :
                        <button onClick={() => { props.unfollow(u.id) }} className={styles.buttonFollow}>Subscribe</button>}
                </div>
            </div>)
        }
    </div>
}

export default Users;