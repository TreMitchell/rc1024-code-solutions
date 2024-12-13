import { useState } from 'react';

type Props = {
  items: string[];
};

export default function RotatingBanner({ items }: Props) {
  // console.log(items);
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log('currentIndex:', currentIndex);

  function handlePrevClick() {
    // console.log('handle prev clicked fired');
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }

  function handleNextClick() {
    // console.log('handle next clicked fired');
    setCurrentIndex((currentIndex + 1) % items.length);
  }

  function handleIndicatorClick(index: number) {
    // console.log('handleIndicatorClick fired');
    setCurrentIndex(index);
  }

  return (
    <div>
      <Banner item={items[currentIndex]} />
      <PrevButton onHandlePrevClick={handlePrevClick} />
      <Indicators
        onHandleIndicatorClick={handleIndicatorClick}
        count={items.length}
        activeIndex={currentIndex}
      />
      <NextButton onHandleNextClick={handleNextClick} />
    </div>
  );
}

type BannerProps = {
  item: string;
};

function Banner({ item }: BannerProps) {
  // console.log('item prop value inside Banner component', item);
  return <h1>{item}</h1>;
}

type PrevButtonProps = {
  onHandlePrevClick: () => void;
};

type NextButtonProps = {
  onHandleNextClick: () => void;
};

function PrevButton({ onHandlePrevClick }: PrevButtonProps) {
  return <button onClick={onHandlePrevClick}>Prev</button>;
}

function NextButton({ onHandleNextClick }: NextButtonProps) {
  return <button onClick={onHandleNextClick}>Next</button>;
}
type IndicatorsProps = {
  count: number;
  activeIndex: number;
  onHandleIndicatorClick: (index: number) => void;
};

function Indicators({
  count,
  activeIndex,
  onHandleIndicatorClick,
}: IndicatorsProps) {
  // console.log('Active index from current indicators:', activeIndex);
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        style={{
          backgroundColor: activeIndex === i ? 'lightblue' : 'white',
          color: 'black',
        }}
        onClick={() => onHandleIndicatorClick(i)}
        key={i}>
        {i}
      </button>
    );
  }
  return <div>{buttons}</div>;
}
