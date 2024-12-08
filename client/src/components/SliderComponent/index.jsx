import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import Banner1 from "~/assets/images/sliders/banner1.png";
import Banner2 from "~/assets/images/sliders/banner2.png";
import Banner3 from "~/assets/images/sliders/banner3.png";
import Banner4 from "~/assets/images/sliders/banner4.png";
import Autoplay from "embla-carousel-autoplay";

const SliderComponent = () => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full h-auto flex items-center shadow-sm justify-center relative"
    >
      <CarouselContent>
        <CarouselItem>
          <img src={Banner1} alt="banner" />
        </CarouselItem>
        <CarouselItem>
          <img src={Banner2} alt="banner" />
        </CarouselItem>
        <CarouselItem>
          <img src={Banner3} alt="banner" />
        </CarouselItem>
        <CarouselItem>
          <img src={Banner4} alt="banner" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-5" />
      <CarouselNext className="absolute right-5" />
    </Carousel>
  );
};

export default SliderComponent;
