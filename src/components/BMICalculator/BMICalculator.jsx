import React from 'react';

function BMICalculator() {

    return (
        <>
            <section class="banner">
                <div class="container" >
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-xl-7">
                            <div class="block">
                                <h1 class="mb-3 mt-3">Tính chỉ số BMI - Chỉ số khối cơ thể </h1>                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h3 class="jumbotron text-center">Mời bạn nhập thông tin cần thiết để tính BMI</h3> 			 
                            <form role="form"> 
                                <div class="form-group">
                                    <div class="radio">
                                        <label>
                                            <input type="radio" ng-model="units" value="nam" name="gioitinh" />
                                            <span class="label label-danger">Nam</span> 
                                        </label>
                                    </div> 				
                                    <div class="radio">
                                        <label>
                                            <input type="radio" ng-model="units" value="nu"name="gioitinh" />
                                            <span class="label label-success">Nữ</span>
                                        </label>
                                    </div>				
                                </div>			  
                                <div id="metric" ng-show="units == 'imperial'">
                                    <div class="form-group">
                                        <label for="weight">Cân Nặng (kg):</label>
                                        <input type="number" placeholder="Cân Nặng (kg):" class="form-control" />    
                                    </div>				
                                    <div class="form-group">
                                        <label for="weight_foot">Chiều Cao (cm)</label>
                                        <input type="number" placeholder="Chiều Cao (cm)" class="form-control" />    
                                    </div>
                                </div>
                            </form>
                        </div>
                        <button type="button" name="" id="" class="btn btn-primary" btn-lg btn-block>Tính</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BMICalculator;