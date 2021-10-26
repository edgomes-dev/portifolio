import * as C from './styles'
import img1 from '../../img/project1.png'
import img2 from '../../img/project2.png'
import img3 from '../../img/project3.png'

export const Projects = () =>
{
    return(
        <C.Container>
            <h2>Projetos</h2>
            <C.ProjectsArea>
                <C.ProjectsAreaItem>
                    <img src={img1} alt="Projeto de Formulário com multi opções" />
                    <div>
                        <button href="#" type="submit">Formulário multi opções</button>
                    </div>
                </C.ProjectsAreaItem>
                <C.ProjectsAreaItem>
                    <img src={img2} alt="Galeria de Fotos" />
                    <div>
                        <button href="#" type="submit">Galeria de Fotos</button>
                    </div>
                </C.ProjectsAreaItem>
                <C.ProjectsAreaItem>
                    <img src={img3} alt="Paienl administrativo" />
                    <div>
                        <button href="#" type="submit">Painel Administrativo</button>
                    </div>
                </C.ProjectsAreaItem>
            </C.ProjectsArea>
            <button>Mais projetos</button>
        </C.Container>
    )
}