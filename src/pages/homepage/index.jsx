import React, { useState } from 'react';
import * as C from './styles';

import { Menu } from '../../components/Menu';
import { Presentation } from '../../components/Presentation';
import { AboutMe } from '../../components/AboutMe';
import { Skills } from '../../components/Skills';
import { Projects } from '../../components/Projects';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';
import { MenuMobile } from '../../components/MenuMobile';

export const HomePage = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
      <C.Container>
        <Menu setMenuIsVisible={setMenuIsVisible} />
        <Presentation />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </C.Container>
    </>
  );
};
