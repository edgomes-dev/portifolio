import project1 from '../../img/project1.png';
import project2 from '../../img/project2.png';
import project3 from '../../img/project3.png';
import project5 from '../../img/project5.png';
import project7 from '../../img/project7.png';
import nodeProject from '../../img/nodejs-project.png';
import project8 from '../../img/construct.jpg';

export const projectsData = [
  {
    title: 'Ed Burguer',
    description:
      'Estou desenvolvendo um sistema delivery para pequenas lanchonetes, estou fazendo ele do zero e aplicando diversos conceitos, como arquitetura de software, AWS, Docker e entre outros. Não estou disponibilizando no github porquê desejo revender, mas posso mostrar ele em uma entrevista',
    technologies: [
      'React',
      'Typescript',
      'Styled-components',
      'React-Icons',
      'Java',
      'Spring',
      'Docker',
      'Composer',
      'PostgreSQL',
      'Node',
      'Firebase'
    ],
    image: {
      source: project8,
      alt: 'Em construção'
    },
    github: '',
    site: ''
  },
  {
    title: 'Formulário multi etapas',
    description:
      'Um formulário que possui 3 etapas, aonde pode transitar as etapas sem perder o valor que já foi inserido.',
    technologies: ['React', 'Context-React', 'Typescript', 'Styled-components'],
    image: {
      source: project1,
      alt: 'Formulário multi etapas'
    },
    github: 'https://github.com/edgomes-dev/multiform-react',
    site: 'https://edgomes-dev.github.io/multiform-react/'
  },
  {
    title: 'Galeria de Fotos',
    description:
      'Uma galeria de fotos online, aonde posso ser enviada apenas fotos para ser armazenada no servidor',
    technologies: ['React', 'Typescript', 'Firebase', 'Styled-components'],
    image: {
      source: project2,
      alt: 'Galeria de fotos online'
    },
    github: 'https://github.com/edgomes-dev/gallery-react',
    site: 'https://edgomes-dev.github.io/gallery-react/'
  },
  {
    title: 'Painel Administrativo',
    description:
      'A ideia desse projeto é apenas construir o layout da homepage de administrativo financeiro.',
    technologies: ['React', 'Bootstrap font awesone', 'React-Vis'],
    image: {
      source: project3,
      alt: 'Layout de um painel administrativo'
    },
    github: 'https://github.com/edgomes-dev/dashboard-admin',
    site: 'https://edgomes-dev.github.io/dashboard-admin/'
  },
  {
    title: 'API - Valoriza',
    description:
      'Com o cenário caótico que em que o mundo está presente devido a pandemia, a ideia do app é trocar elogios, uma coisa que faz muita falta e que devido ao isolamento ficou cada vez mais raro.',
    technologies: ['Node', 'Typescript', 'sqlite3', 'typeorm', 'jsonwebtoken', 'uuid'],
    image: {
      source: nodeProject,
      alt: 'API Nodejs'
    },
    github: 'https://github.com/edgomes-dev/project-node-valoriza',
    site: ''
  },
  {
    title: 'Hackathon Sebrae',
    description:
      'A ideia do app é ajudar os comerciantes que estavam perdendo clientes devido aos protócolos de segurança impostos devido a covid-19',
    technologies: ['Html5', 'Css3', 'Php'],
    image: {
      source: project5,
      alt: 'Evento do MegaHackaton Shawee'
    },
    github: 'https://github.com/rign0002/Hackathon-Sebrae',
    site: 'https://rign0002.github.io/Hackathon-Sebrae/'
  },
  {
    title: 'API CRUD NodeJS',
    description: 'Um simples CRUD que eu fiz para me aprofundar nesses conhecimentos',
    technologies: ['NodeJS', 'Typescript', 'Express', 'Mongoose'],
    image: {
      source: nodeProject,
      alt: 'API CRUD Nodejs'
    },
    github: 'https://github.com/edgomes-dev/-CRUD-Rest-Nodejs',
    site: ''
  },
  {
    title: 'Toughts',
    description:
      'É um sistema que tem o usuário e seus pensamentos, como se fosse um blog e cada um pode olhar os pensamentos dos outros usários.',
    technologies: [
      'NodeJS',
      'Bcryptjs',
      'Mysql',
      'Sequelize',
      'Connect-Flash',
      'Cookie-parser',
      'Cookie-session',
      'Express-flash',
      'Express-session',
      'Handlebars',
      'Eslint e Prettier'
    ],
    image: {
      source: nodeProject,
      alt: 'Toughts'
    },
    github: 'https://github.com/edgomes-dev/toughts',
    site: ''
  },
  {
    title: 'Feedback Widget',
    description:
      'Apenas um widget que fica no canto inferior da tela, para ser passado algum feedback, seja bug ou ideia.',
    technologies: [
      'React',
      'Typescript',
      'Vitejs',
      'Tailwind',
      '@Headlessui/react',
      'html2canvas',
      'phosphor-react',
      'Eslint e Prettier'
    ],
    image: {
      source: project7,
      alt: 'Feedback Widget'
    },
    github: 'https://github.com/edgomes-dev/feedback-widget-react',
    site: ''
  }
];
