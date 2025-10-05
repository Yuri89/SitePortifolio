import './app.css'
import Banner from './Components/Banner'
import Header from './Components/Header'
import Apresentacao from './Components/Apresentacao'
import Formacao from './Components/Formacao'
import Tecnologias from './Components/Tecnologias'
import Footer from './Components/Footer'
import Projetos from './Components/Projetos'

export function App() {

  return (
    <main className='app'>
      <Header/>
      <Banner/>
      <Apresentacao/>
      <Formacao/>
      <Tecnologias/>
      <Projetos/>
      <Footer/>
    </main>
  )
}
