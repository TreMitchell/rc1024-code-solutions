import './SearchableList.css';
import { useState } from 'react';

type SearchableListProps = {
  list: string[];
};

export default function SearchableList({ list }: SearchableListProps) {
  const [userValue, setUserValue] = useState('');
  // const userValue = 'you'; //Imagine somebody typed this

  const filteredItems = list.filter((item) =>
    item.toLowerCase().includes(userValue.toLowerCase())
  );

  console.log(filteredItems);

  return (
    <div className="wrapper">
      {/* phase 3- pass setUserValue to SearchBar component as a prop */}
      <SearchBar userValue={userValue} onSetUserValue={setUserValue} />
      <Items items={filteredItems} />
    </div>
  );
}

type SearchBarProps = {
  userValue: string;
  onSetUserValue: (inputValue: string) => void;
};

// destructure the new function prop passed down from parent
function SearchBar({ userValue, onSetUserValue }: SearchBarProps) {
  return (
    <input
      className="search"
      value={userValue}
      // in the onChange prop, call the function that has been passed down as a prop - hint: e.target.value
      onChange={(e) => onSetUserValue(e.target.value)}
    />
  );
}

type ItemsProps = {
  items: string[];
};

function Items({ items }: ItemsProps) {
  // console.log('items from Items component:', items);
  /* Alternative
    const itemsToDisplay = items.map((item) => (<li>{item}</li>))
    return (itemsToDisplay)
  */

  return (
    <ul>
      {items.length > 0 &&
        items.map((item, index) => <li key={index}>{item}</li>)}
      {items.length === 0 && <p>no matches</p>}
    </ul>
  );
}
