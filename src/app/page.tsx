import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import EmailSection from  '../components/EmailSection'
import './globals.css';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-background    text-black bg-gray-900'>
      <Navbar />
      <div className='px-12'>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}