import { Htag, P, Button, Rating } from '@/components';
import { Inter } from '@next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
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
        <Rating rating={rating} isEditable setRating={setRating} />
      </div>
    </>
  );
}
