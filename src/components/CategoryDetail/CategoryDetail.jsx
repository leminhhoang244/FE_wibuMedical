import React from 'react';

function CategoryDetail() {
    return (
        <>
            <section class="section blog-wrap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-lg-12 mb-5">
                                    <div class="single-blog-item">
                                        <img src="images/blog/blog-1.jpg" alt="" class="img-fluid" />
                                        <div class="blog-item-content mt-5">
                                            <div class="blog-item-meta mb-3">
                                                <span class="text-color-2 text-capitalize mr-3"><i class="icofont-book-mark mr-2"></i> Equipment</span>
                                            </div> 
                                            <h2 class="mb-4 text-md"><a href="blog-single.html">Những Nguyên Nhân Gây Cận Mắt</a></h2>
                                            <p class="lead mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus natus, consectetur? Illum libero vel nihil nisi quae, voluptatem, sapiente necessitatibus distinctio voluptates, iusto qui. Laboriosam autem, nam voluptate in beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae iure officia nihil nemo, repudiandae itaque similique praesentium non aut nesciunt facere nulla, sequi sunt nam temporibus atque earum, ratione, labore.</p>								
                                            <p class="lead mb-4 font-weight-normal text-black">The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, rerum beatae repellat tenetur incidunt quisquam libero dolores laudantium. Nesciunt quis itaque quidem, voluptatem autem eos animi laborum iusto expedita sapiente.</p>				
                                        </div>
                                    </div>
                                </div>		
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
                                <div class="sidebar-widget search  mb-3 ">
                                    <h5>Tìm Kiếm</h5>
                                    <form action="#" class="search-form">
                                        <input type="text" class="form-control" placeholder="Thông tin bệnh" />
                                        <i class="ti-search"></i>
                                    </form>
                                </div>
                                <div class="sidebar-widget latest-post mb-3">
                                    <h5>Các Mục Bệnh Khác</h5>
                                    <div class="py-2">
                                        <h6 class="my-2"><a href="#">Đục thủy tinh thể</a></h6>
                                        <p><a href="thongtinchuyengia.html">Tham vấn y khoa bác sĩ</a></p>
                                    </div>
                                    <div class="py-2">
                                        <h6 class="my-2"><a href="#">Đục thủy tinh thể</a></h6>
                                        <p><a href="thongtinchuyengia.html">Tham vấn y khoa bác sĩ</a></p>
                                    </div>
                                    <div class="py-2">
                                        <h6 class="my-2"><a href="#">Đục thủy tinh thể</a></h6>
                                        <p><a href="thongtinchuyengia.html">Tham vấn y khoa bác sĩ</a></p>
                                    </div>       
                                </div>		
                            </div>
                        </div>   
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategoryDetail;