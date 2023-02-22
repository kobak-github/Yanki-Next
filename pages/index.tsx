import { Htag } from '@/components';
import { Button } from '@/components/Button/Button';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div>
        <Htag tag="h1">This Htag</Htag>
        <Button color="brown">ПОДПИСАТЬСЯ</Button>
        <Button color="white" icon={true}>
          в избранные
        </Button>
      </div>
    </>
  );
}
