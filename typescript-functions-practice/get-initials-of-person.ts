/* exported getInitialsOfPerson */
function getInitialsOfPerson(person: Person): string {
  const firstNameInitial: string = person.firstName[0];
  const lastNameInitial: string = person.lastName[0];
  const initials: string = `${firstNameInitial}${lastNameInitial}`;
  return initials;
}
