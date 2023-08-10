import htmlImg from '../../img/html.svg';
import cssImg from '../../img/css.svg';
import javascriptImg from '../../img/javascript.png';
import reactImg from '../../img/react.png';
import typescriptImg from '../../img/typescript.png';
import javaImg from '../../img/java.png';
import nodeImg from '../../img/nodejs.png';
import phpImg from '../../img/php.png';

export const skillsData = [
  {
    title: 'Html5',
    subtitle: 'Front-end',
    color: 'orange',
    image: {
      sourceImg: htmlImg,
      alt: 'HTML5'
    },
    knowledge: ['Criação de interfaces', 'Acessibilidade']
  },
  {
    title: 'Css3',
    subtitle: 'Front-end',
    color: 'blue',
    image: {
      sourceImg: cssImg,
      alt: 'Css3'
    },
    knowledge: ['Flex', 'Grid', 'Unidades de Medidas', 'Responsividade']
  },
  {
    title: 'Javascript',
    subtitle: 'Ling. de programação',
    color: 'yellow',
    image: {
      sourceImg: javascriptImg,
      alt: 'Javascript'
    },
    knowledge: ['ES6', 'Programação assíncrona', 'DOM', 'Programação Funcional']
  },
  {
    title: 'ReactJs',
    subtitle: 'Front-end',
    color: 'blue',
    image: {
      sourceImg: reactImg,
      alt: 'React'
    },
    knowledge: [
      'Styled Components',
      'React Hooks',
      'Redux',
      'Axios',
      'React-hook-form',
      'Hooks',
      'React Testing Library',
      'Storybook'
    ]
  },
  {
    title: 'NodeJs',
    subtitle: 'Back-end',
    color: 'green',
    image: {
      sourceImg: nodeImg,
      alt: 'Nodejs'
    },
    knowledge: [
      'API Rest',
      'Autenticação(JWT)',
      'TypeORM',
      'Sequelize',
      'Mongoose',
      'UUID',
      'Firebase',
      'Handlebars'
    ]
  },
  {
    title: 'Typescript',
    subtitle: 'Ling. de programação',
    color: 'blue',
    image: {
      sourceImg: typescriptImg,
      alt: 'Typescript'
    },
    knowledge: ['Type', 'Interface', 'Generics', 'Typescript no React e Node']
  },
  {
    title: 'Java',
    subtitle: 'Ling. de programação',
    color: 'red',
    image: {
      sourceImg: javaImg,
      alt: 'Java'
    },
    knowledge: ['JDBC', 'JSF', 'JPA', 'Spring Boot | Data | Security', 'JUnit 5']
  },
  {
    title: 'PHP',
    subtitle: 'Ling. de programação',
    color: 'purple',
    image: {
      sourceImg: phpImg,
      alt: 'Logo do php'
    },
    knowledge: ['Básico da linguagem', 'Orientação à objetos', 'PDO']
  }
];
