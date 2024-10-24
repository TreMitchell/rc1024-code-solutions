'use strict';
/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const firstNameInitial = person.firstName[0];
  const lastNameInitial = person.lastName[0];
  const initials = `${firstNameInitial}${lastNameInitial}`;
  return initials;
}
