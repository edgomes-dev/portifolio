import * as C from './styles'

import htmlImg from '../../img/html.png'
import cssImg from '../../img/css.png'
import javascriptImg from '../../img/javascript.png'
import reactImg from '../../img/react.svg'
import nextImg from '../../img/next.png'
import styledImg from '../../img/styled-components.png'
import typescriptImg from '../../img/typescript.png'
import nodeImg from '../../img/nodejs.png'
import expressImg from '../../img/express.png'
import mysqlImg from '../../img/mysql.png'
import mongodbImg from '../../img/mongodb.svg'


export const Skills = () =>
{
    return(
        <C.Container>
            <h2>Minhas Habilidades</h2>
            <C.Skills>
                <C.SkillsItem><img src={htmlImg} alt="html" />Html5</C.SkillsItem>
                <C.SkillsItem><img src={cssImg} alt="css" />Css3</C.SkillsItem>
                <C.SkillsItem><img src={javascriptImg} alt="javascript" />Javascript</C.SkillsItem>
                <C.SkillsItem><img src={reactImg} alt="React" />React</C.SkillsItem>

                <C.SkillsItem><img src={nextImg} alt="next.js" />Next</C.SkillsItem>
                <C.SkillsItem><img src={reactImg} alt="Context API" />Context API</C.SkillsItem>
                <C.SkillsItem><img src={styledImg} alt="Styled Components" />Styled Components</C.SkillsItem>
                <C.SkillsItem><img src={typescriptImg} alt="Typescript" />Typescript</C.SkillsItem>

                <C.SkillsItem><img src={nodeImg} alt="Node.js" />Node</C.SkillsItem>
                <C.SkillsItem><img src={expressImg} alt="Express" />Express</C.SkillsItem>
                <C.SkillsItem><img src={mysqlImg} alt="Mysql" />Mysql</C.SkillsItem>
                <C.SkillsItem><img src={mongodbImg} alt="MongoDB" />MongoDB</C.SkillsItem>
            </C.Skills>
        </C.Container>
    )
}