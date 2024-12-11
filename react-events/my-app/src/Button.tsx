type Props = {
  label: string;
  onButtonClick: () => void;
};
export function Button({ label, onButtonClick }: Props) {
  function handleClick() {
    onButtonClick();
  }
  return <button onClick={handleClick}>{label}</button>;
}
