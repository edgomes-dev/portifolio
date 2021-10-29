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
                <C.ContactItem href="https://www.linkedin.com/in/edgomesdev/" target="_blank">
                    <img src={linkedinImg} alt="Linkedin" />
                    <p>Linkedin</p>
                </C.ContactItem>
                <C.ContactItem href="https://github.com/edgomes-dev" target="_blank">
                    <img src={githubImg} alt="Github" />
                    <p>Github</p>
                </C.ContactItem>
                <C.ContactItem href="https://wa.me/5581981127202" target="_blank">
                    <img src={whatsappImg} alt="Whatsapp" />
                    <p>Whatsapp</p>
                </C.ContactItem>
                <C.ContactItem href="https://docs.google.com/uc?export=download&id=1CKoHHyzViqzaQWjOKOyq3dNcViLGuSrL" target="_blank">
                    <img src={curriculoImg} alt="currículo" />
                    <p>currículo</p>
                </C.ContactItem>
            </C.ContactArea>
        </C.Container>
    )
}