import React, { useEffect, useState } from 'react';
import * as C from './styles';

import { RiMenu3Fill } from 'react-icons/ri';

export const Menu = ({ setMenuIsVisible }) => {
  let latestPosition = 0;
  const [isVisibleMenu, setIsVisibleMenu] = useState('flex');
  const [menuBackground, setMenuBackground] = useState(false);

  useEffect(function () {
    const menuScroll = () => {
      let currentPosition = window.scrollY;

      if (window.scrollY > 150) {
        setIsVisibleMenu('none');
        setMenuBackground(true);
      }
      if (window.scrollY < 150) {
        setMenuBackground(false);
      }
      if (currentPosition < latestPosition) {
        setIsVisibleMenu('flex');
      }
      latestPosition = currentPosition;
    };

    window.addEventListener('scroll', menuScroll);
  }, []);

  return (
    <C.Container visible={isVisibleMenu} background={menuBackground}>
      <C.Logo>Ed Gomes</C.Logo>
      <C.Menu>
        <ul>
          <li>
            <a href="#presentation">Início</a>
          </li>
          <li>
            <a href="#aboutme">Sobre</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#project">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </C.Menu>
      <RiMenu3Fill color="#fff" size={20} onClick={() => setMenuIsVisible(true)} />
    </C.Container>
  );
};
