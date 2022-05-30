import React from 'react';
import "./Sidebar.css";
function sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Chức năng Admin</h3>
                <ul className='sidebarList'>
                    <li className='sibarListItem '>Quản Lý Tài Khoản</li>
                    <li className='sibarListItem'>Quản Lý Loại Tài Khoản</li>
                    <li className='sibarListItem'>Quản Lý Người Dùng</li>
                    <li className='sibarListItem'>Quản Lý Bệnh</li>
                </ul>
            </div>
        </div>
    );
}

export default sidebar;