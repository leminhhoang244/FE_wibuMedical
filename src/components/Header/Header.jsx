import React from "react";

function Header() {
  return (
    <>
      <header>
        <div className="header-top-bar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <ul className="top-bar-info list-inline-item pl-0 mb-0">
                  <li className="list-inline-item">
                    <i className="icofont-location-pin mr-2" />
                    Đà Nẵng - Việt Nam
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                  <a href="tel:+23-345-67890">
                    <span className="h4">
                      Đăng nhập
                    </span>
                    <br />
                    <span className="h4">
                      Đăng Ký
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          className="navbar navbar-expand-lg navigation bg-light"
          id="navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              WIBU MEDICAL
            </a>
            <div className="row row-1">
              <ul className="box-element1">
                <li className="search-nav">
                  <input type placeholder="tìm kiếm" className="search1" />
                </li>
                <i className="fa-solid fa-magnifying-glass" />
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarmain">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Trang Chủ
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Trang phụ
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown02"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Chuyên Mục
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown02">
                    <li>
                      <a
                        className="dropdown-item"
                        href="thongtinchitietchuyenmuc.html"
                      >
                        Sức khỏe mắt
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="thongtinchitietchuyenmuc.html"
                      >
                        Tiểu đường
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="thongtinchitietchuyenmuc.html"
                      >
                        Đo chỉ số BMI
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="thongtinchitietchuyenmuc.html"
                      >
                        Tính ngày rụng chứng
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="timbenhvien.html">
                    Tìm Bệnh Viện
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown02"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Kiểm Tra Sức Khỏe
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown02">
                    <li>
                      <a className="dropdown-item" href="dochisoBMI.html">
                        Đo chỉ số BMI
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="tinhngayrungtrung.html"
                      >
                        Tính ngày rụng chứng
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="thongtinchuyengia.html">
                    Thông Tin Chuyên Gia
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
