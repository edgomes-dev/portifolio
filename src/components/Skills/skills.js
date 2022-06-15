import htmlImg from '../../img/html.svg';
import cssImg from '../../img/css.svg';
import javascriptImg from '../../img/javascript.png';
import reactImg from '../../img/react.png';
import typescriptImg from '../../img/typescript.png';
import nodeImg from '../../img/nodejs.png';
import mysqlImg from '../../img/mysql.png';
import mongodbImg from '../../img/mongodb.svg';

export const skillsData = [
  {
    title: 'Html5',
    subtitle: 'Front-end',
    color: 'orange',
    description: 'é uma linguagem de marcação utilizada na construção de páginas na Web.',
    image: {
      sourceImg: htmlImg,
      alt: 'HTML5'
    },
    knowledge: ['Criação de interfaces']
  },
  {
    title: 'Css3',
    subtitle: 'Front-end',
    color: 'blue',
    description:
      'É uma maneira de dar estilo ao código criado por linguagens de marcação, como html5 por exemplo.',
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
    description:
      'Javascript é uma linguagem de programação amplamente flexível podendo ser utilizada no front-end, back-end, mobile e até desktop.',
    image: {
      sourceImg: javascriptImg,
      alt: 'Javascript'
    },
    knowledge: [
      'Programação Orientada a Objetos',
      'Programação assíncrona',
      'DOM',
      'Métodos',
      'Eventos'
    ]
  },
  {
    title: 'ReactJs',
    subtitle: 'Front-end',
    color: 'blue',
    description:
      'React JS é uma biblioteca JavaScript usada no desenvolvimento web para construir interfaces web.',
    image: {
      sourceImg: reactImg,
      alt: 'React'
    },
    knowledge: [
      'Estilização (Styled Components)',
      'React Hooks',
      'Redux',
      'Axios',
      'React-hook-form'
    ]
  },
  {
    title: 'NodeJs',
    subtitle: 'Back-end',
    color: 'green',
    description:
      'Node.js é um ambiente de execução Javascript que roda no lado do servidor utilizado nas construções de aplicações back-end.',
    image: {
      sourceImg: nodeImg,
      alt: 'Nodejs'
    },
    knowledge: ['CRUD', 'API Rest', 'Autenticação(JWT)', 'Sequelize', 'Mongoose']
  },
  {
    title: 'Typescript',
    subtitle: 'Ling. de programação',
    color: 'blue',
    description:
      'Typescript é um superset sintático e estrito de Javascript que adiciona tipagem estática opcional à linguagem.',
    image: {
      sourceImg: typescriptImg,
      alt: 'Typescript'
    },
    knowledge: ['Type', 'Interface', 'Generics', 'Typescript no React e Node']
  },
  {
    title: 'Mysql',
    subtitle: 'Banco de dados',
    color: 'blue',
    description:
      'O MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto.',
    image: {
      sourceImg: mysqlImg,
      alt: 'Mysql'
    },
    knowledge: ['CRUD', 'Relacionamentos de Tabelas']
  },
  {
    title: 'MongoDB',
    subtitle: 'Banco de dados',
    color: 'green',
    description:
      'MongoDB é um programa de gerenciamento de banco de dados NoSQL de código aberto. Os bancos de dados NoSQL são bastante úteis para trabalhar com grandes conjuntos de dados distribuídos.',
    image: {
      sourceImg: mongodbImg,
      alt: 'MongoDB'
    },
    knowledge: ['CRUD', 'Refêrencias de tabelas']
  }
];
