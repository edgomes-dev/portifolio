import * as C from  './App.styles'
import { Presentation } from './components/Presentation'
import { AboutMe } from './components/AboutMe'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const App = () => 
{
  return(
    <C.Container>
      <Presentation />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </C.Container>
  )
}

export default App;