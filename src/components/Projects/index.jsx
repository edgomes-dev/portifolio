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
                        <a href="https://edgomes-dev.github.io/multiform-react/" target="_blank">Formulário multi opções</a>
                    </div>
                </C.ProjectsAreaItem>
                <C.ProjectsAreaItem>
                    <img src={img2} alt="Galeria de Fotos" />
                    <div>
                        <a href="https://edgomes-dev.github.io/gallery-react/" target="_blank">Galeria de Fotos</a>
                    </div>
                </C.ProjectsAreaItem>
                <C.ProjectsAreaItem>
                    <img src={img3} alt="Paienl administrativo" />
                    <div>
                        <a href="https://edgomes-dev.github.io/dashboard-admin/" target="_blank">Painel Administrativo</a>
                    </div>
                </C.ProjectsAreaItem>
            </C.ProjectsArea>
            <div className="button">
                <a href="https://github.com/edgomes-dev?tab=repositories" alt="Mais projetos" target="_blank">Mais projetos</a>
            </div>
        </C.Container>
    )
}