/* exported getFullNameOfPerson */

// using the person interface from getLastNameOfPerson
function getFullNameOfPerson(person: Person): string {
  const fullName: string = `${person.firstName} ${person.lastName}`;
  return fullName;
}
