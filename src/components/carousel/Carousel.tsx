import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import useEmbla from "embla-carousel-react";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLElement> {
  images: string[];
  bgColor?: string;
}

export function Carousel({ className, images, bgColor, ...props }: Props) {
  const [emblaRef] = useEmbla({ loop: true }, [Autoplay({ delay: 3000 })]);

  return (
    <div
      className={twMerge(
        "overflow-hidden w-full h-full flex flex-col relative",
        className
      )}
      style={{
        backgroundColor: bgColor,
      }}
      ref={emblaRef}
      {...props}
    >
      <div className="flex touch-pan-y touch-pinch-zoom h-full w-full gap-x-8">
        {images.map((img) => (
          <div
            className="basis-full grow-0 shrink-0 w-full bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${img})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
