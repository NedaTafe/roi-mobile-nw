import { getRequest, deleteRequest, postRequest, putRequest, getRequestWithCaching } from './Api';

// Root URL for the API backend
const apiUrl = 'http://localhost:5095/api';
const useCache = true;

// Get all departments
export function RoiGetDepartments() {
  // Call API endpoint: GET /departments
  console.log(`${apiUrl}/departments`);
  if (useCache) {
    return getRequestWithCaching(`${apiUrl}/departments`).then((response) => {
      // If request/response is successful, return JSON data
      return response;
    });
  } else {
    return getRequest(`${apiUrl}/departments`).then((response) => {
      // If request/response is successful, return JSON data
      return response;
    });
  }
}

// Get all people
export function RoiGetPeople() {
  // Call API endpoint: GET /people
  console.log(`${apiUrl}/people`);
  if (useCache) {
    return getRequestWithCaching(`${apiUrl}/people`).then((response) => {
      // If request/response is successful, return JSON data
      return response;
    });
  } else {
    return getRequest(`${apiUrl}/people`).then((response) => {
      // If request/response is successful, return JSON data
      return response;
    });
  }
}

// Get person
export function RoiGetPerson(id) {
  // Call API endpoint: GET /Person/{id}
  console.log(`${apiUrl}/people/${id}`);
  if (useCache) {
    return getRequestWithCaching(`${apiUrl}/people/${id}`).then((response) => {
      // If request/response is successful, return JSON data
      return response;
    });
  } else {
    return getRequest(`${apiUrl}/people/${id}`).then((response) => {
      // If request/response is successful, return JSON data
      return response;
    });
  }
}

// Delete person
export function RoiDeletePerson(id) {
  // Call API endpoint: DELETE /Person/{id}
  return deleteRequest(`${apiUrl}/people/${id}`, { id }).then((response) => {
    // If request/response is successful, return true (no data in response)
    return true;
  });
}

// Add person
export function RoiAddPerson(name, phone, departmentId, street, city, state, zip, country) {
  // Call API endpoint: POST /Person
  return postRequest(`${apiUrl}/people`, { name, phone, departmentId, street, city, state, zip, country }).then((response) => {
    // If request/response is successful, return JSON data
    return response;
  });
}

// Update person
export function RoiUpdatePerson(id, name, phone, departmentId, street, city, state, zip, country) {
  // Call API endpoint: PUT /Person/{id}
  return putRequest(`${apiUrl}/people/${id}`, { id, name, phone, departmentId, street, city, state, zip, country }).then((response) => {
    // If request/response is successful, return true (no data in response)
    return true;
  });
}
