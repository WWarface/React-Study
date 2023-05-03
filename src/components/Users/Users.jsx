import React from "react";
import styles from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/NoAvatar.png'


class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return (
            <div className={styles.wrapper}>
                {
                    this.props.usersPage.users.map(u => <div key={u.id} className={styles.Wrapper}>
                        <div className={styles.userWrapper}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.ava}></img>
                            <div className={styles.description}>
                                <p className={styles.name}>{u.name}</p>
                                <p className={styles.status}>{"u.location.city"}</p>
                                <p className={styles.info}>{"u.location.country"}</p>
                            </div>
                            {u.isFollowed ?
                                <button onClick={() => { this.props.follow(u.id) }} className={styles.buttonUnfollow}>UnFollow</button> :
                                <button onClick={() => { this.props.unfollow(u.id) }} className={styles.buttonFollow}>Subscribe</button>}
                        </div>
                    </div>)
                }
            </div>
        );
    }
}

export default Users;