/* eslint-disable no-undef */
import * as S from './styles';

export const ImageComponent = (props) => {
  return (
    <S.Wrapper>
      <img src={process.env.PUBLIC_URL + props.url} alt={props.alt} />
    </S.Wrapper>
  );
};
