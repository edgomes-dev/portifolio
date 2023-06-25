import * as S from './styles';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { imagesMock } from './mock';
import { ImageComponent } from '../ImageComponent';

export const Certificates = () => {
  const settings = {
    speed: 500,
    dots: true,
    Infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <S.Wrapper>
      <h2>Certificações</h2>
      <S.Content>
        <Slider {...settings}>
          {imagesMock.map((element) => (
            <ImageComponent key url={element.url} alt={element.alt} />
          ))}
        </Slider>
      </S.Content>
    </S.Wrapper>
  );
};
