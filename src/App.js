import './App.css';
import Connect from './Components/Connect/Connect';
import ContactForm from './Components/ContactForm/ContactForm';
import ExploreServices from './Components/ExploreServices/ExploreServices';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import IntroText from './Components/IntroText/IntroText';
import Methods from './Components/Methods/Methods';
import Navbar from './Components/Navbar/Navbar';
import RecentProjects from './Components/RecentProjects/RecentProjects';
import Skills from './Components/Skills/Skills';
import SocialLinks from './Components/SocialLinks/SocialLinks';
import Testimonials from './Components/Testimonials/Testimonials';
import WhyChooseMe from './Components/WhyChooseMe/WhyChooseMe';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <SocialLinks/>
        <IntroText/>
        <WhyChooseMe/>
        <ExploreServices/>
        <Skills/>
        <Methods/>
        <RecentProjects/>
        <Testimonials/>
        <Connect/>
        <ContactForm/>
        <Footer/>
    </div>
  );
}

export default App;
