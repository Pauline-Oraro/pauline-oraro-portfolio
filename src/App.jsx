
import './App.css'
import AboutPage from './components/aboutpage';
import ContactPage from './components/contactpage';
import Footer from './components/footer';
import Header from './components/header';
import HomePage from './components/homepage';
import ProjectsPage from './components/projectspage';


function App() {
  return(
    <div>
      <Header/>
      <HomePage/>
      <AboutPage/>
      <ProjectsPage/>
      <ContactPage/>
      <Footer/>

    </div>
  )
}

export default App
