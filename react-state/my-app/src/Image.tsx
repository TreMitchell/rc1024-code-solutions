import './Image.css';
import { useState } from 'react';

type Props = {
  src: string[];
};
export function Image({ src }: Props) {
  const [index, setIndex] = useState(0);

  function updateIndex() {
    if (index < src.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          onClick={updateIndex}
          className="image-fill"
          src={src[index]}
          alt="space-image"
        />
      </div>
    </div>
  );
}
