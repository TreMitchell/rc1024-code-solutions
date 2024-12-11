import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const images = ['/starry-sky.jpeg', '/new-york.jpeg', '/mountain.jpeg'];
const captions = [
  'A Beautiful Image of Space',
  'The Big Apple Under the Bright Lights',
  'Mountainview in Switzerland',
];
const descriptions = [
  'This is a wonderful sky full of stars!',
  'New York City at its brightest!',
  'Beautiful Switzerland Mountains!',
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image src={images} />
      <Caption caption={captions} />
      <Description text={descriptions} />
      <Button label="Click for Next Image" />
    </>
  );
}
