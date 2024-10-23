/* exported getDescriptionOfPerson */
interface Description {
  name: string;
  occupation: string;
  birthPlace: string;
}

function getDescriptionOfPerson(person: Description): string {
  const getDescription: string = `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
  return getDescription;
}
