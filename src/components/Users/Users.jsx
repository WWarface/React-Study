import React from "react";
import styles from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/NoAvatar.png'


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then(response => {

            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount)
        });
    }

    onPageChanged(pageNum) {
        this.props.setPage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.usersPage.pageSize}`).then(response => {

            this.props.setUsers(response.data.items)
        });
    }

    render() {
        const TOTAL_UI_BUTTONS_COUNT = 10;
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        debugger
        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
        let curPL = curP + 5;
        debugger
        if(curPL<TOTAL_UI_BUTTONS_COUNT)curPL=TOTAL_UI_BUTTONS_COUNT;
        let slicedPages = pages.slice(curPF, curPL);
        return (


            <div className={styles.wrapper}>
                <div className={styles.buttonsWrapper}>
                    {
                        slicedPages.map(p => {
                            return <button onClick={() => { this.onPageChanged(p); }} className={this.props.currentPage === p ? `${styles.selectedPage}` : `${styles.pageButton}`}>{p}</button>
                        })
                    }
                </div>
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