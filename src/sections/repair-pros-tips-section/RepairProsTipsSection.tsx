import React, {useState} from 'react';
import './repairProsTipsSection.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ARROW_ICON = () => <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M27.2071 8.70711C27.5976 8.31658 27.5976 7.68342 27.2071 7.29289L20.8431 0.928932C20.4526 0.538408 19.8195 0.538408 19.4289 0.928932C19.0384 1.31946 19.0384 1.95262 19.4289 2.34315L25.0858 8L19.4289 13.6569C19.0384 14.0474 19.0384 14.6805 19.4289 15.0711C19.8195 15.4616 20.4526 15.4616 20.8431 15.0711L27.2071 8.70711ZM0 9H26.5V7H0V9Z"
        fill="#182433"/>
</svg>


export const RepairProsTipsSection = () => {
    const [swiper, setSwiperRef] = useState<any>(null);
    const videos: Array<string> = ["1", "2", "3", "4", "5"]

    return (
        <div className={"repair-pro-tips"} id={'repair-pro-tips'}>
            <span id={'section-heading'}>Repair Pros Tips</span>
            <div className={"repair-pro-tips__top"}>
                <div className={"repair-pro-tips__top__left"}>
                    <h1>You Can Fix It</h1>
                </div>
                <div className={"repair-pro-tips__top__right"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque magna purus massa gravida
                        amet, duis purus.</p>
                </div>
            </div>
            <div className={"repair-pro-tips__bottom"}>
                <div className={"repair-pro-tips__bottom_videos"}>
                    <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={"auto"}
                        centeredSlides={false}
                        spaceBetween={30}
                        pagination={{
                            type: undefined,
                        }}
                        navigation={false}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            videos.map((data, index) => (
                                <SwiperSlide key={data + index}>
                                    <div className={"repair-pro-tips__bottom_videos_video"}>{index}</div>

                                </SwiperSlide>

                            ))
                        }
                    </Swiper>
                </div>
                <div className={'slide-navigation'}>
                    <div className={'slide-navigation_option'} onClick={() => swiper?.slidePrev()}>
                        <ARROW_ICON/>
                        <span>Prev</span></div>
                    <div className={'slide-navigation_option'} onClick={() => swiper?.slideNext()}>
                        <span>Next</span>
                        <ARROW_ICON/>
                    </div>
                </div>
            </div>
        </div>
    );
};
