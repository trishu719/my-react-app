import { useRef, useState } from 'react';
import { Button, Carousel, Image, Stack } from 'react-bootstrap';
import { ArrowLeft, ArrowLeftCircle, ArrowRight, ArrowRightCircle } from 'react-bootstrap-icons';
import { FcPrevious } from 'react-icons/fc';
import { GrNext } from 'react-icons/gr';

export default function RBCarousel() {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const Sliderimage = [
        {
            id: "1",
            img:"https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
            title: "First Slide",
            description: "This is the first slide"
        },
        {
            id: "2",
            img: "https://wowslider.com/sliders/demo-44/data1/images/bridge.jpg",
            title: "Second Slide",
            description: "This is the second slide"
        },
        {
            id: "3",
            img: "https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg",
            title: "Third Slide",
            description: "This is the third slide"
        }
    ];

    const refslider = useRef();
    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? Sliderimage.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setIndex((prev) => (prev === Sliderimage.length - 1 ? 0 : prev + 1));
    };

    return (
        <div>
            <h3 className='fw-bold text-info fs-5'>Carousel</h3><hr/>
            <Carousel
                ref={refslider}
                activeIndex={index}
                onSelect={handleSelect}
                prevIcon={<ArrowLeftCircle size={30} />}
                nextIcon={<ArrowRightCircle size={30} />}
                indicators={false}
            >
                {Sliderimage.map((item) => {
                    return (
                        <Carousel.Item key={item.id} className="text-center px-5">
                            <Image src={item.img} className='w-100 rounded-5' />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
            
            <Stack direction="horizontal" className="justify-content-center mt-3" gap={3}>
                {Sliderimage.map((item, i) => {
                    return (
                    <div key={item.id} 
                    role='button'
                    className="indicator-btn rounded rounded-circle"
                     style={{ width: "12px", height: "12px", backgroundColor: index === i ? "#3c87f7" : "#c1c1c3" }} 
                     onClick={() => {setIndex(i)}}>
                    </div>
                    );
                })}
            </Stack>

            <Stack direction="horizontal" className="justify-content-center mt-3" gap={3}>
                <Button variant="primary" onClick={handlePrev}><ArrowLeft />prev</Button>
                <Button variant="primary" onClick={handleNext}>next<ArrowRight /></Button>
            </Stack>
        </div>
    )
}