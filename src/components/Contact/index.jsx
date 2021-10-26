import * as C from './styles'
import linkedinImg from '../../img/linkedin.png'
import githubImg from '../../img/github.png'
import whatsappImg from '../../img/whatsapp.png'
import curriculoImg from '../../img/document.png'

export const Contact = () =>
{
    return (
        <C.Container>
            <h2>Contatos</h2>
            <C.ContactArea>
                <C.ContactItem href="https://www.linkedin.com/in/edgomesdev/">
                    <img src={linkedinImg} alt="Linkedin" />
                    <p>Linkedin</p>
                </C.ContactItem>
                <C.ContactItem href="https://github.com/edgomes-dev">
                    <img src={githubImg} alt="Github" />
                    <p>Github</p>
                </C.ContactItem>
                <C.ContactItem href="#">
                    <img src={whatsappImg} alt="Whatsapp" />
                    <p>Whatsapp</p>
                </C.ContactItem>
                <C.ContactItem href="#">
                    <img src={curriculoImg} alt="currículo" />
                    <p>currículo</p>
                </C.ContactItem>
            </C.ContactArea>
        </C.Container>
    )
}