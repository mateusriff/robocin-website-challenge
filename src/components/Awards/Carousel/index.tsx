import Slider from 'react-slick';

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
        vertical: true,
        swipe: false,
        pauseOnHover: false,
    };
  
    return (
        <Slider {...settings}>
            {items.map((item, index) => (
            <div key={index}>{item}</div>
            ))}
        </Slider>
    );
};

export default Carousel;