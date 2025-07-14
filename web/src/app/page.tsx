import { Header } from '@/components/molecules/header/Header';
import { HeroCard } from '@/components/organisms/heroCard/HeroCard';
import { Footer } from '@/components/molecules/footer/Footer';

export default function Home() {
  return (
      <>
        <Header />
        <HeroCard />
        <Footer />
      </>
  );
}