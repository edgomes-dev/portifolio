import React, { useState } from 'react';
import * as S from './styles';

import { Menu } from '../../components/Menu';
import { Presentation } from '../../components/Presentation';
import { AboutMe } from '../../components/AboutMe';
import { Skills } from '../../components/Skills';
import { Projects } from '../../components/Projects';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';
import { MenuMobile } from '../../components/MenuMobile';
import { Certificates } from '../../components/Certificates';

export const HomePage = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <S.Wrapper>
      <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
      <Menu setMenuIsVisible={setMenuIsVisible} />
      <S.Content>
        <Presentation />
        <AboutMe />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </S.Content>
    </S.Wrapper>
  );
};
