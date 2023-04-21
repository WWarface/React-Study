import React from 'react';
import SideBar from './SideBar';
import StoreContext from '../../StoreContext';



const SideBarContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    return <SideBar friendsPage={store.getState().friendsPage} />
                }
            }
        </StoreContext.Consumer>
    );
}


export default SideBarContainer;