import Hero from "../components/Hero";
import Showroom from "../components/Showroom";
import PageTransition from '../components/PageTransition';


export default function Home() {
  return (
        <PageTransition>

    <>
      <Hero />
      <Showroom />
    </>
        </PageTransition>

  );
}
