import React from 'react';
import "./Home.css";
import UserList from '../../components/UserList/UserList';
import ManagementAccount from '../../components/ManagementAccount/ManagementAccount';
import ManagementAccountType from '../../components/ManagementAccountType/ManagementAccountType';
import ManagementDisease from '../../components/ManagementDisease/ManagementDisease';
function home() {
    return (
        <div className='home'>
            {/* <ManagementAccount/> */}
            {/* <ManagementAccountType/> */}
            <UserList/>
            {/* chỗ ni là render ra thanh bên phải 
            vd: mi bấm vô chức năng nào thì hắn render ra cái form của chức năng đó
             */}
            {/* <ManagementDisease/> */}
        </div>
    );
}

export default home;