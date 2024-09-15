import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Head from "next/head";
import data from './assets/data/portfolio.json';
import { GoogleAnalytics } from '@next/third-parties/google'


export default function Home() {  
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Head>
        <meta name="robots" content="index,follow" />;
        <meta name="title" content={data.name} />
        <meta name="description" content={data.metadata.description} />
        <meta name="keywords" content={data.metadata.keywords.join(",")} />
        <meta name="author" content={data.name} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8"></meta>
        <title>{data.name}</title>
      </Head>
      {/* Browser event handlers */}
      <GoogleAnalytics gaId={data.GAID} />
      <Navbar />
      <div className="container mt-24 laptop:mt-16 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
