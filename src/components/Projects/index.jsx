import * as C from './styles'
import img1 from '../../img/project1.png'
import img2 from '../../img/project2.png'
import img3 from '../../img/project3.png'
import img4 from '../../img/project4.png'

export const Projects = () =>
{
    return(
        <C.Container>
            <h2>Projetos</h2>
            <C.ProjectsArea>
                <C.ProjectsAreaItem>
                    <img src={img1} alt="Projeto de Formulário com multi opções" />
                    <div>                        
                        <h3>Formulário multi etapas</h3>                        
                        <C.ItemText>
                            <p>Um formulário que possui 3 etapas, aonde pode transitar as etapas sem perder o valor que já foi inserido.</p>
                            <p>Utilizei React para construção do layout, junto com react-router para gerenciamento das rotas.</p>
                            <p>Utilizei o context-react para fazer gerenciar o estado da aplicação e fazer com que os dados não percam o valor mesmo alterando as páginas</p>
                            <p>Typescript foi utilizado para tipar os dados, deixando mais fácil o desenvolvimento e futuras manutenções.</p>
                            <p>além de styled-components para estilizar a página.</p>
                        </C.ItemText>
                        <C.ItemButton>
                            <a href="https://edgomes-dev.github.io/multiform-react/" target="_blank">Acessar o Site</a>
                            <a href="https://github.com/edgomes-dev/multiform-react" target="_blank">Código da aplicação</a>
                        </C.ItemButton>
                    </div>
                </C.ProjectsAreaItem>
                <C.ProjectsAreaItem>
                    <img src={img2} alt="Galeria de Fotos" />
                    <div>                    
                        <h3>Galeria de Fotos</h3>                        
                        <C.ItemText>
                            <p>Uma galeria de fotos online, aonde posso ser enviada apenas fotos para ser armazenada no servidor</p>
                            <p>Firebase foi usado como banco de dados para armazenar as imagens</p>
                            <p>Construido com React, principalmente para não precisar recarregar a página sempre que mandar uma foto</p>
                            <p>Além de typescript, styled-components e uuid</p>
                        </C.ItemText>
                        <C.ItemButton>
                            <a href="https://edgomes-dev.github.io/gallery-react/" target="_blank">Acessar o Site</a>
                            <a href="https://github.com/edgomes-dev/gallery-react" target="_blank">Código da aplicação</a>
                        </C.ItemButton>
                    </div>
                </C.ProjectsAreaItem>
                <C.ProjectsAreaItem>
                    <img src={img3} alt="Paienl administrativo" />
                    <div>                        
                        <h3>Painel Administrativo</h3>                            
                        <C.ItemText>
                            <p>A ideia desse projeto é apenas construir o layout da homepage de administrativo financeiro.</p>
                            <p>React foi utilizado para construir o layout da página.</p>
                            <p>bootstrap font awesome, utilizei os ícones na aplicação.</p>
                            <p>React-vis, utilizei para gerar os gráficos aparti de dados que já foram predefinidos.</p>
                        </C.ItemText>
                        <C.ItemButton>
                            <a href="https://edgomes-dev.github.io/dashboard-admin/" target="_blank">Acessar o Site</a>
                            <a href="https://github.com/edgomes-dev/dashboard-admin" target="_blank">Código da aplicação</a>
                        </C.ItemButton>
                    </div>
                </C.ProjectsAreaItem>
                <C.ProjectsAreaItem>
                    <img src={img4} alt="API nodejs" />
                    <div>                        
                        <h3>API - Valoriza</h3>                            
                        <C.ItemText>
                            <p>Com o cenário caótico que em que o mundo está presente devido a pandemia, a ideia do app é trocar elogios, uma coisa que faz muita falta e que devido ao isolamento ficou cada vez mais raro.</p>
                            <p>Utilizei nodejs para construir API, junto com typescript para tipar os dados.</p>
                            <p>Banco de dados utilizado foi o sqlite3, com typeorm para manipular o banco de dados e caso seja trocado o banco de dados, não é preciso alterar todo o código da aplicação.</p>
                            <p>Com auxilio do jsonwebtoken, gerando um token sempre que um usuário realiza login na aplicação, além de uuid para gerar um hash, assim não se repetindo usuários e tags.</p>
                        </C.ItemText>
                        <C.ItemButton>
                            <a href="https://github.com/edgomes-dev/project-node-valoriza" target="_blank">Código da aplicação</a>
                        </C.ItemButton>
                    </div>
                </C.ProjectsAreaItem>
            </C.ProjectsArea>
            <div className="button">
                <a href="https://github.com/edgomes-dev?tab=repositories" alt="Mais projetos" target="_blank">Mais projetos</a>
            </div>
        </C.Container>
    )
}