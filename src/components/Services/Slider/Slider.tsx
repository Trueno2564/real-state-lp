import { Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'
import { sliderDataImages } from './Slider.data'


export function Slider() {
    return (
        <Swiper
            slidesPerView={2.5}
            spaceBetween={15}
            freeMode={true}
            navigation
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            modules={[Navigation, Scrollbar]}
            className='h-[240px] md:h-[320px] w-[300px] md:w-[500px]'
            grabCursor
        >
            {sliderDataImages.map(({id, urlImage}) => (
                <SwiperSlide key={id}>
                    <Image src={`/assets/houses/${urlImage}`} alt='Scroll Images' width={200} height={700} className='w-auto h-auto rounded-xl'/>
                </SwiperSlide>
            ))}

        </Swiper>
    )
}
