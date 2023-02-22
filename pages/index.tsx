import { Htag, P, Button } from '@/components';
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
        <P size="f14w300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
        <P size="f14w700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
        <P size="f16w200">Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
        <P size="f16w300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
        <P size="f16w700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
      </div>
    </>
  );
}
