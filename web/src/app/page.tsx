import { AuthForm } from '@/components/organisms/AuthForm/Index';
import { Header } from '@/components/molecules/header/Header';
// import { AuthButton } from '@/components/molecules/authButton/authButton';

export default function Home() {
  return (
    <div>
      <Header />
      <AuthForm />
      {/* <AuthButton/> */}
    </div>
  );
}