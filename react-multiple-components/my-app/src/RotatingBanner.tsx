import { useState } from 'react';

type Props = {
  items: string[];
};

export default function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrevClick() {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }

  function handleNextClick() {
    setCurrentIndex((currentIndex + 1) % items.length);
  }

  function handleIndicatorClick(index: number) {
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
