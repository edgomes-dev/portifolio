import * as C from './styles';

import { BsGithub } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';

import { projectsData } from './projects';

export const Projects = () => {
  return (
    <C.Container id="project">
      <h2>Meus Projetos</h2>
      <C.Card>
        {projectsData.map(({ title, description, technologies, image, github, site }) => (
          <C.CardItem key={title}>
            <img src={image.source} alt={image.alt} />
            <h3>{title}</h3>
            <p>{description}</p>
            <span>Tecnologias utilizadas:</span>
            <ul>
              {technologies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <C.Links>
              <a href={github} className="github" rel="noreferrer" target="_blank">
                <BsGithub />
                <p>Github</p>
              </a>
              {site && (
                <a href={site} className="site" rel="noreferrer" target="_blank">
                  <TbWorld />
                  <p>Site</p>
                </a>
              )}
            </C.Links>
          </C.CardItem>
        ))}
      </C.Card>
    </C.Container>
  );
};
