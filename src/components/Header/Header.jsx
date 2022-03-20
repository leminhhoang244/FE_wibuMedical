import React from 'react';

function Header() {

    return (
        <>
            <header>
                <div class="header-top-bar">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <ul class="top-bar-info list-inline-item pl-0 mb-0">
                                    <li class="list-inline-item"><i class="icofont-location-pin mr-2"></i>Đà Nẵng - Việt Nam</li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <div class="text-lg-right top-right-bar mt-2 mt-lg-0">
                                    <a href="tel:+23-345-67890" >
                                        <span class="h4"><i class="fa fa-sign-in" aria-hidden="true">Đăng Nhập / Đăng ký</i></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="navbar navbar-expand-lg navigation bg-light" id="navbar">
                    <div class="container">
                        <a class="navbar-brand" href="index.html">
                            WIBU MEDICAL
                            <img src="" alt="" class="img-fluid" />
                        </a>
                        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icofont-navigation-menu"></span>
                        </button>            
                        <div class="collapse navbar-collapse" id="navbarmain">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="index.html">Trang Chủ</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle"  id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="">
                                        Chuyên Mục
                                        <i class="icofont-thin-down"></i>
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdown02">
                                        <li><a class="dropdown-item" href="thongtinchitietchuyenmuc.html">Sức khỏe mắt</a></li>
                                        <li><a class="dropdown-item" href="thongtinchitietchuyenmuc.html">Tiểu đường</a></li>
                                        <li><a class="dropdown-item" href="thongtinchitietchuyenmuc.html">Đo chỉ số BMI</a></li>
                                        <li><a class="dropdown-item" href="thongtinchitietchuyenmuc.html">Tính ngày rụng chứng</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="timbenhvien.html">Tìm Bệnh Viện</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle"  id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Kiểm Tra Sức Khỏe
                                        <i class="icofont-thin-down"></i>
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdown02">
                                        <li><a class="dropdown-item" href="dochisoBMI.html">Đo chỉ số BMI</a></li>
                                        <li><a class="dropdown-item" href="tinhngayrungtrung.html">Tính ngày rụng chứng</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="thongtinchuyengia.html">Thông Tin Chuyên Gia</a>
                                </li>                               
                                <nav class="navbar navbar-light bg-light">
                                    <form class="form-inline">
                                        <input class="form-control mr-sm-2" type="search" placeholder="Nhập" aria-label="Search" />
                                    </form>
                                </nav>							    	  
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;