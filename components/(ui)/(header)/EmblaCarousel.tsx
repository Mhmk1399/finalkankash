"use client";
import React, { useEffect, useState, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { PrevButton, NextButton } from "./EmblaCarouselArrowButtons";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);
  const [images, setImages] = useState([]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    axios
      .get("api/banners")
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
      }, 5000);

      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  return (
    <div className="embla relative w-full h-[115px] md:h-[300px] lg:h-[430px] mx-auto mt-16">
      <div
        className="embla__viewport overflow-hidden rounded-lg"
        ref={emblaRef}
      >
        <div className="embla__container flex">
          {images.map((image: { image?: string; name?: string }, index) => (
            <div className="embla__slide relative min-w-full" key={index}>
              <Link href="/Store">
                <Image
                  width={4000}
                  height={4000}
                  className="embla__slide__img w-full h-[38%] md:h-[54%] lg:h-[430px] object-center"
                  src={image.image || `/assets/images/computer-banner4.jpeg`}
                  alt={`Slide ${index + 1}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <PrevButton onClick={scrollPrev} disabled={!prevBtnEnabled} />
        <NextButton onClick={scrollNext} disabled={!nextBtnEnabled} />
      </div>
    </div>
  );
};

export default EmblaCarousel;
