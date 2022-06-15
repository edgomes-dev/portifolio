import React, { useEffect } from 'react';
import * as C from './styles';
import { IoMdClose } from 'react-icons/io';

export const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <C.Container isVisible={menuIsVisible}>
      <IoMdClose size={45} color="#fff" onClick={() => setMenuIsVisible(false)} />
      <nav>
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
      </nav>
    </C.Container>
  );
};
