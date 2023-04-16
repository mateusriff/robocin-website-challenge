import Slider from 'react-slick';
import { CarouselWrapper } from './style';

type Props = {
    items: React.ReactNode[];
};
  
const Carousel = ({ items }: Props) => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        infinite: true,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  
    return (
        <CarouselWrapper>
            <Slider {...settings}>
                {items.map((item, index) => (
                <div key={index}>{item}</div>
                ))}
            </Slider>
        </CarouselWrapper>
    );
};

export default Carousel;