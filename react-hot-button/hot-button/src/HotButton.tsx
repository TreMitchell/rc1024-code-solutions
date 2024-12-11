import { useState } from 'react';
import './HotButton.css';

type Props = {
  label: string;
};

export default function HotButton({ label }: Props) {
  console.log('clicks');
  const [clicks, setClicks] = useState(0);
  function handleClick() {
    setClicks(clicks + 1);
  }

  const color = getTemperatureClass();
  console.log('color:', color);

  function getTemperatureClass(): string {
    if (clicks < 3) return 'cold';
    if (clicks < 6) return 'cool';
    if (clicks < 9) return 'tepid';
    if (clicks < 12) return 'warm';
    if (clicks < 15) return 'hot';
    return 'nuclear';
  }

  return (
    <>
      <button onClick={handleClick} className={`hot-button ${color}`}>
        {label}
      </button>
      <p>clicks: {clicks}</p>
    </>
  );
}
