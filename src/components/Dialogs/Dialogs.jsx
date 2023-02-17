import React from 'react';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css'



const Dialogs = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.dialogs}>
            <Dialog isActive={true} name='Hrtntrue' url='https://samequizy.pl/wp-content/uploads/2018/03/filing_images_6ef20837c84b.jpeg' />
            <Dialog name='Slava' url='https://pbs.twimg.com/media/El_euloXEAEhl4X.jpg:large'/>
            <Dialog name='Ivakhiv1' url='https://preview.redd.it/this-looks-like-irl-uncle-kesseli-v0-ye2ppfghqmj81.jpg?auto=webp&s=bdd454d4df1340c951c1401f852c4b972d92aae3'/>
            <Dialog name='Custom4mo' url='https://www.racedepartment.com/attachments/fleetari3-png.430600/'/>               
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you&</div>
                <div className={s.message}>Yo im yo</div>
            </div>
        </div>
    );
}

export default Dialogs;