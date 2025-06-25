import { AuthForm } from '@/components/organisms/AuthForm/Index';
import { Header } from '@/components/molecules/header/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <AuthForm />
    </div>
  );
}