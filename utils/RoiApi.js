// Mock data (unchanged)
const departments = [
  { id: 0, name: 'General' },
  { id: 1, name: 'Information Communications Technology' },
  { id: 2, name: 'Finance' },
  { id: 3, name: 'Marketing' },
  { id: 4, name: 'Human Resources' },
];

export let people = [
  {
    id: 1,
    name: 'John Smith',
    phone: '02 9988 2211',
    departmentId: 4,
    street: '1 Code Lane',
    city: 'Javaville',
    state: 'NSW',
    zip: '0100',
    country: 'Australia',
    department: { id: 4, name: 'Human Resources' },
  },
  {
    id: 2,
    name: 'Sue White',
    phone: '03 8899 2255',
    departmentId: 4,
    street: '16 Bit way',
    city: 'Byte Cove',
    state: 'QLD',
    zip: '1101',
    country: 'Australia',
    department: { id: 4, name: 'Human Resources' },
  },
  {
    id: 3,
    name: "Bob O' Bits",
    phone: '05 7788 2255',
    departmentId: 4,
    street: '8 Silicon Road',
    city: 'Cloud Hills',
    state: 'VIC',
    zip: '1001',
    country: 'Australia',
    department: { id: 4, name: 'Human Resources' },
  },
  {
    id: 4,
    name: 'Mary Blue',
    phone: '06 4455 9988',
    departmentId: 2,
    street: '4 Processor Boulevard',
    city: 'Appletson',
    state: 'NT',
    zip: '1010',
    country: 'Australia',
    department: { id: 2, name: 'Finance' },
  },
  {
    id: 5,
    name: 'Mick Green',
    phone: '02 9988 1122',
    departmentId: 3,
    street: '700 Bandwidth Street',
    city: 'Bufferland',
    state: 'NSW',
    zip: '0110',
    country: 'Australia',
    department: { id: 3, name: 'Marketing' },
  },
];

// Functions
export function RoiGetDepartments() {
  return new Promise((resolve, reject) => {
    resolve(departments);
  });
}

export function RoiGetPeople() {
  return new Promise((resolve, reject) => {
    resolve(people);
  });
}

export function RoiGetPerson(id) {
  return new Promise((resolve, reject) => {
    const person = people.find((person) => person.id === id);
    if (person) {
      resolve(person);
    } else {
      reject('Person not found');
    }
  });
}

export function RoiDeletePerson(id) {
  return new Promise((resolve, reject) => {
    people = people.filter((person) => person.id !== id);
    resolve();
  });
}

export function RoiAddPerson(name, phone, departmentId, street, city, state, zip, country) {
  return new Promise((resolve, reject) => {
    const newId = people.length ? Math.max(...people.map((person) => person.id)) + 1 : 1;
    const department = departments.find((dept) => dept.id === departmentId);
    const newPerson = {
      id: newId,
      name,
      phone,
      departmentId,
      street,
      city,
      state,
      zip,
      country,
      department: department ? { id: department.id, name: department.name } : null,
    };
    people.push(newPerson);
    resolve(newPerson);
  });
}

export function RoiUpdatePerson(id, name, phone, departmentId, street, city, state, zip, country) {
  return new Promise((resolve, reject) => {
    const personIndex = people.findIndex((person) => person.id === id);
    if (personIndex !== -1) {
      const department = departments.find((dept) => dept.id == departmentId);
      people[personIndex] = {
        id,
        name,
        phone,
        departmentId,
        street,
        city,
        state,
        zip,
        country,
        department: department ? { id: department.id, name: department.name } : null,
      };
      resolve(people[personIndex]);
    } else {
      reject('Person not found');
    }
  });
}
