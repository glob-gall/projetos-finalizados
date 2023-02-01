import { useEffect, useRef, useState } from 'react'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import { Close } from '@styled-icons/material-outlined/Close'
import SlickSlider from 'react-slick'
import Slider, { SlickSettings } from 'components/Slider'

import * as S from './styles'
const settings: SlickSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const ModalSettings: SlickSettings = {
  arrows: true,
  slidesToShow: 1,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

export type GalleryImageProps = {
  src: string
  label: string
}
export type GalleryProps = {
  items: GalleryImageProps[]
}
const Gallery = ({ items }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }
    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])
  return (
    <S.Wrapper color="white">
      <Slider settings={settings} ref={slider}>
        {items.map((item, index) => (
          <img
            className="thumb_img"
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              setIsOpen(true)
              slider.current!.slickGoTo(index, true)
            }}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider settings={ModalSettings} ref={slider}>
            {items.map((item, index) => (
              <img
                role="button"
                key={`gallery-${index}`}
                src={item.src}
                alt={`Gallery - ${item.label}`}
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
