const fs = require('fs');

// Sample hospital data
const hospitals = [
  {
    name: 'Medicity',
    patientCount: 200,
    location: 'Ayyathil',
  },
  {
    name: 'N.S Hospital',
    patientCount: 100,
    location: 'kollam',
  },
  {
    name: 'Upasana Hospital',
    patientCount: 150,
    location: 'medayilmukku',
  },
];

// Convert the hospital data to a JSON string
const hospitalData = JSON.stringify(hospitals, null, 2);

// Write the JSON data to a file (hospitals.json)
fs.writeFileSync('hospitals.json', hospitalData);

console.log('Hospital data has been set up in hospitals.json');
