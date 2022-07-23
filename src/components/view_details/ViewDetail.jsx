import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const ViewDetail = () => {
    const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img src={require(`../../assets/images/img${i + 1}.jpg`)}  />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='absolute top-0 left-0 w-full h-full bg-white z-[99]'>
        <div className='flex flex-col  container mx-auto w-full'>
            <div className='flex flex-row w-full h-full'>
                <div className='flex flex-col w-[30%] h-[30%] justify-center'>
                    <Slider {...settings}>
                        <div className=' flex w-full h-full justify-center items-center'>
                            <img src={require("../../assets/images/img1.jpg")} className=' w-full h-full text-center' />
                        </div>
                        <div className='flex w-full h-full justify-center items-center'>
                            <img src={require("../../assets/images/img2.jpg")} className=' w-full h-full text-center' />
                        </div>
                        <div className='flex w-full h-full justify-center items-center'>
                            <img src={require("../../assets/images/img3.jpg")} className='w-full h-full text-center' />
                        </div>
                        <div className=' flex w-full h-full justify-center item-center'>
                            <img src={require("../../assets/images/img4.jpg")} className=' w-full h-full text-center' />
                        </div>
                    </Slider>
                </div>
                <div className='flex flex-col w-full h-full '>
                    <h3 className=' w-full h-full justify-center items-center flex text-2xl my-4'>TOYOTA PRIUS 3RD GEN 2012</h3>
                    <div className='flex flex-col  mx-20'>
                        <h5 className='flex w-full h-full justify-start items-start text-xl mb-4'>Veheicle Info</h5>
                        <div className=' grid grid-cols-2'>
                            <div className='flex flex-col gap-y-1'>
                                <div className='flex flex-row '>
                                    <label className=' text-gray-600'>Type :</label>
                                    <h3 className=' text-gray-900'>Luxary</h3>
                                </div>
                                <div className='flex flex-row '>
                                    <lable className=' text-gray-600'>A/C :</lable>
                                    <h3 className=' text-gray-900'>Yes</h3>
                                </div>
                                <div className='flex flex-row'>
                                    <label className=' text-gray-600'>speed :</label>
                                    <h3 className=' text-gray-900'>280km/h</h3>
                                </div>
                                <div className='flex flex-row'>
                                    <lable className=' text-gray-600'>Fuel type :</lable>
                                    <h3 className=' text-gray-900'>Disel</h3>
                                </div>
                                <div className='flex flex-row'>
                                    <lable className=' text-gray-600'>Color :</lable>
                                    <h3 className=' text-gray-900'> White</h3>
                                </div>
                                <div className='flex flex-row'>
                                    <label className=' text-gray-600'>Registerd Year :</label>
                                    <h3 className=' text-gray-900'>2015</h3>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <div className='flex flex-row '>
                                    <label className=' text-gray-600'>No Passenger :</label>
                                    <h3 className=' text-gray-900'>05</h3>
                                </div>
                                <div className='flex flex-row'>
                                    <label className=' text-gray-600'>Engine CC :</label>
                                    <h3 className=' text-gray-900'>1800cc</h3>
                                </div>
                                <div className='flex flex-row'>
                                    <label className=' text-gray-600'>No of Door :</label>
                                    <h3 className=' text-gray-900'>04</h3>
                                </div>
                                <div className='flex flex-row'>
                                    <label className=' text-gray-600'>Tranmission :</label>
                                    <h3 className=' text-gray-900'>Auto</h3>
                                </div>
                                <div className='flex flex-row'>
                                    <label className=' text-gray-600'>Brand :</label>
                                    <h3 className=' text-gray-900'>Toyota</h3>
                                </div>
                                <div className='flex flex-row'>
                                    <label className=' text-gray-600'>Manufacture Year :</label>
                                    <h3 className=' text-gray-900'>2012</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col  mx-20'>
                        <h3 className='flex w-full h-full justify-start items-start text-xl mb-4'>Rate Per Date</h3>
                        <div>
                            <div>
                                <label>For 1 week :</label>
                                <h3>USD 60.00</h3>
                            </div>
                            <div>
                                <label>For 2 weeks Or more:</label>
                                <h3>USD 60.34</h3>
                            </div>
                            <div>
                                <label>For 3 weeks or more :</label>
                                <h3>USD 53.14</h3>
                            </div>
                            <div>
                                <label>For 1 month or more :</label>
                                <h3>USD 48.00</h3>
                            </div>
                            <div>
                                <label>Mileage Limitation  :</label>
                                <h3>100 km per day</h3>
                            </div>
                            <div>
                                <label>Excess Mileage:</label>
                                <h3>USD 0.35</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewDetail