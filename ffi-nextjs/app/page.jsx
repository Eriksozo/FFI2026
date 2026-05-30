import Hero from '../components/Hero';
import BlackBox from '../components/BlackBox';
import WeeklyPhrases from '../components/WeeklyPhrases';
import ZeroToAdvanced from '../components/ZeroToAdvanced';
import StudentsVideo from '../components/StudentsVideo';
import Compare from '../components/Compare';
import Bonuses from '../components/Bonuses';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Footer from '../components/Footer';
import StickyBar from '../components/StickyBar';

export default function Page() {
  return (
    <main>
      <Hero />
      <BlackBox />
      <WeeklyPhrases />
      <ZeroToAdvanced />
      <StudentsVideo />
      <Compare />
      <Bonuses />
      <Pricing />
      <About />
      <Footer />
      <StickyBar />
    </main>
  );
}
