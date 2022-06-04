import React from "react";
import "./Admin.css";
import UserList from "../UserList/UserList";
import ManagementAccount from "../ManagementAccount/ManagementAccount";
import ManagementAccountType from "../ManagementAccountType/ManagementAccountType";
import ManagementDisease from "../ManagementDisease/ManagementDisease";

function Admin() {
  return (
    <div>
      <div className="w-1400">
        <div className="w-300">
          <h3>Chức năng Admin</h3>
          <ul>
            <li>Quản lý tài khoản</li>
            <li>Quản lý loại tài khoản</li>
            <li>Quản lý người dùng</li>
            <li>Quản lý người bệnh</li>
          </ul>
        </div>
        <div className="w-1000">
        {/* <ManagementAccount></ManagementAccount> */}
        {/* <ManagementAccountType></ManagementAccountType> */}
          {/* <UserList></UserList> */}
          <ManagementDisease></ManagementDisease>
          <div className="button_Container">
        <div className="divAllButton">
          <div className="button_Them">
            <button>Thêm</button>
          </div>
          <div className="button_Them">
            <button>Sửa</button>
          </div>
          <div className="button_Them">
            <button>Xóa</button>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
