import * as C from './styles'
import linkedinImg from '../../img/linkedin.png'
import githubImg from '../../img/github.png'
import whatsappImg from '../../img/whatsapp.png'

export const Footer = () =>
{
    return (
        <C.Container>
            <C.AreaLeft>
                <h3>Meu número</h3>
                <p>(81) 98112-7202</p>
            </C.AreaLeft>
            <C.AreaRight>
                <a href="https://www.linkedin.com/in/edgomesdev/"><img src={linkedinImg} all="" /></a>
                <a href="https://github.com/edgomes-dev"><img src={githubImg} all="" /></a>
                <a href="#"><img src={whatsappImg} all="" /></a>
            </C.AreaRight>
        </C.Container>
    )
}