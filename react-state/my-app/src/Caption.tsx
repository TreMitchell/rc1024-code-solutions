import { useState } from 'react';

type Props = {
  caption: string[];
};

export function Caption({ caption }: Props) {
  const [index, setIndex] = useState(0);

  function updateIndex() {
    if (index < caption.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  return <h3 onClick={updateIndex}>{caption[index]}</h3>;
}
