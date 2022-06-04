import React from "react";
import "./style.css";

function UserList() {
  return (
    <div>
      
      <div class="table-responsive">
            <table class="table table-bordered">
              <thead className="title">
                <tr>
                  <th>Mã người dùng</th>
                  <th>Họ tên</th>
                  <th>Sđt</th>
                  <th>Email</th>
                  <th>Địa chỉ</th>
                  <th>Giới tính</th>
                  <th>Ngày sinh</th>
                  <th>Ảnh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>Lam Dang Khoa</td>
                  <td>0708058388</td>
                  <td>lamdangkhoa@gmail.com</td>
                  <td>05- Nguyen Hoang - Da Nang</td>
                  <td>Nam</td>
                  <td>24/04/2000</td>
                  <td>link file ảnh abcdxyz.jpg</td>
                </tr>
                <tr>
                  <td>001</td>
                  <td>Lam Dang Khoa</td>
                  <td>0708058388</td>
                  <td>lamdangkhoa@gmail.com</td>
                  <td>05- Nguyen Hoang - Da Nang</td>
                  <td>Nam</td>
                  <td>24/04/2000</td>
                  <td>link file ảnh abcdxyz.jpg</td>
                </tr>
                <tr>
                  <td>001</td>
                  <td>Lam Dang Khoa</td>
                  <td>0708058388</td>
                  <td>lamdangkhoa@gmail.com</td>
                  <td>05- Nguyen Hoang - Da Nang</td>
                  <td>Nam</td>
                  <td>24/04/2000</td>
                  <td>link file ảnh abcdxyz.jpg</td>
                </tr>
                <tr>
                  <td>001</td>
                  <td>Lam Dang Khoa</td>
                  <td>0708058388</td>
                  <td>lamdangkhoa@gmail.com</td>
                  <td>05- Nguyen Hoang - Da Nang</td>
                  <td>Nam</td>
                  <td>24/04/2000</td>
                  <td>link file ảnh abcdxyz.jpg</td>
                </tr>
                <tr>
                  <td>001</td>
                  <td>Lam Dang Khoa</td>
                  <td>0708058388</td>
                  <td>lamdangkhoa@gmail.com</td>
                  <td>05- Nguyen Hoang - Da Nang</td>
                  <td>Nam</td>
                  <td>24/04/2000</td>
                  <td>link file ảnh abcdxyz.jpg</td>
                </tr>
              </tbody>
            </table>
          </div>
      <div className="containerss">
            <form action="">
              <div className="frm_MaUser ">
                <div className="input-box">
                  <span className="details">Mã người dùng</span>
                  <input
                    id="input_maND"
                    className="input_container"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="frm_MaUser ">
                <div className="input-box">
                  <span className="details">Họ tên</span>
                  <input
                    id="input_hoten"
                    className="input_container"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="frm_MaUser ">
                <div className="input-box">
                  <span className="details">Sđt</span>
                  <input
                    id="input_sdt"
                    className="input_container"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="frm_MaUser">
                <div className="input-box">
                  <span className="details">email</span>
                  <input
                    id="input_email"
                    className="input_container"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="frm_MaUser ">
                <div className="input-box">
                  <span className="details">Địa chỉ</span>
                  <input
                    id="input_diachi"
                    className="input_container"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="frm_MaUser">
                <div className="input-box">
                  <span className="details">Giới tính</span>
                  <select id="input_gioitinh">
                    <option value="">Nam</option>
                    <option value="">Nữ</option>
                  </select>
                </div>
              </div>
              <div className="frm_MaUser">
                <div className="input-box">
                  <span className="details">Ngày sinh</span>
                  <input
                    id="input_ngaysinh"
                    className="input_Container"
                    type="date"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="frm_MaUser">
                <div className="input-box">
                  <span className="details">Ảnh</span>
                  <input
                    id="input_anh"
                    className="input_Container"
                    type="file"
                  />
                </div>
                <div className="khuon-anh">
                </div>
              </div>
              
            </form>
          </div>

          

      
    </div>
  );
}

export default UserList;