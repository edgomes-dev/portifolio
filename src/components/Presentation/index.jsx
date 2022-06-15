import React from 'react';
import * as C from './styles';

import gif from '../../img/giphy.gif';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

export const Presentation = () => {
  return (
    <C.Container id="presentation">
      <C.Text>
        <p>Olá, eu sou</p>
        <span>Ed Gomes</span>
        <p className="subtitle">Desenvolvedor fullstack</p>
        <a href="#project" className="btn">
          Meus projetos
        </a>
        <C.Icons>
          <a href="https://www.linkedin.com/in/edgomesdev/" rel="noreferrer" target="_blank">
            <BsLinkedin size={25} color="#fff" />
          </a>
          <a href="https://github.com/edgomes-dev" rel="noreferrer" target="_blank">
            <BsGithub size={25} color="#fff" />
          </a>
          <a
            href="mailto:edgomesgomes@outlook.com?"
            className="email"
            rel="noreferrer"
            target="_blank">
            <HiOutlineMail size={25} color="#fff" />
          </a>
        </C.Icons>
      </C.Text>
      <img src={gif} id="gif" alt="Gif de programação" />
    </C.Container>
  );
};
