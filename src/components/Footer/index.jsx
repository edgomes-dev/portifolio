import * as C from './styles';

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

export const Footer = () => {
  return (
    <C.Container>
      <C.AreaLeft>
        <h3>Ed Gomes</h3>
        <p>Desenvolder Fullstack</p>
      </C.AreaLeft>
      <C.AreaRight>
        <a href="https://www.linkedin.com/in/edgomesdev/" rel="noreferrer" target="_blank">
          <BsLinkedin size={25} color="#fff" />
        </a>
        <a href="https://github.com/edgomes-dev" rel="noreferrer" target="_blank">
          <BsGithub size={25} color="#fff" />
        </a>
        <a href="#" className="email" rel="noreferrer" target="_blank">
          <HiOutlineMail size={25} color="#fff" />
        </a>
      </C.AreaRight>
    </C.Container>
  );
};
