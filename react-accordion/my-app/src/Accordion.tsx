import { useState } from 'react';
import './Accordion.css';

type AccordionProps = {
  topics: {
    id: number;
    title: string;
    content: string;
  }[];
};

export default function Accordion({ topics }: AccordionProps) {
  const [openTopicId, setOpenTopicId] = useState<undefined | number>(); // create state to track this value

  function handleTopicClick(id: number) {
    if (id === openTopicId) {
      setOpenTopicId(undefined);
    } else {
      setOpenTopicId(id);
    }
  }

  return (
    <div>
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isOpen={openTopicId === topic.id} // true
          onHandleTopicClick={handleTopicClick}
        />
      ))}
    </div>
  );
}

type TopicCardProps = {
  topic: {
    id: number;
    title: string;
    content: string;
  };
  isOpen: boolean;
  onHandleTopicClick: (id: number) => void;
};

function TopicCard({ topic, isOpen, onHandleTopicClick }: TopicCardProps) {
  return (
    <>
      <h2 onClick={() => onHandleTopicClick(topic.id)}>{topic.title}</h2>
      {isOpen && <p>{topic.content}</p>}
    </>
  );
}
