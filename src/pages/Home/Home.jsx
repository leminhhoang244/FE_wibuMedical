import React from 'react';
import "./Home.css";
import UserList from '../../components/UserList/UserList';
function home() {
    return (
        <div className='home'>
            <UserList/>
            {/* chỗ ni là render ra thanh bên phải 
            vd: mi bấm vô chức năng nào thì hắn render ra cái form của chức năng đó
             */}
        </div>
    );
}

export default home;