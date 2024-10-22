interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const Student: StudentProps = {
  firstName: 'Tré',
  lastName: 'Mitchell',
  age: 21,
};

const vehicle: Vehicle = {
  make: 'Ford',
  model: 'F150',
  year: 2018,
};

const pet: Pet = {
  name: 'Blue',
  kind: 'pitbull',
};

const fullName: string = `${Student.firstName} ${Student.lastName}`;
console.log('value of fullName:', fullName);
Student.livesInIrvine = false;
Student.previousOccupation = 'student';
console.log('Student lives in Irvine?:', Student.livesInIrvine);
console.log("Student's previous occupation:", Student.previousOccupation);
console.log('value of Student:', Student);
console.log('typeof Student:', typeof Student);

vehicle['color'] = 'red';
vehicle['isConvertible'] = false;
console.log('color of vehicle:', vehicle['color']);
console.log('is vehicle a convertible:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
console.log('typeof vehicle:', typeof vehicle);

delete pet.name;
delete pet['kind'];
console.log('value of pet:', pet);
console.log('typeof pet:', typeof pet);
