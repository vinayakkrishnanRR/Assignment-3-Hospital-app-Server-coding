const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000; // You can change this port if needed

app.use(express.json());

// Load the initial hospital data from the JSON file.
let hospitals = JSON.parse(fs.readFileSync('hospitals.json'));

// To get all hospitals
app.get('/hospitals', (req, res) => {
  res.json(hospitals);
});

// To add a new hospital
app.post('/hospitals', (req, res) => {
  const newHospital = req.body;
  hospitals.push(newHospital);

  // Save the updated data back to the JSON file
  fs.writeFileSync('hospitals.json', JSON.stringify(hospitals, null, 2));

  res.json(newHospital);
});

// To update a hospital
app.put('/hospitals/:id', (req, res) => {
  const hospitalId = req.params.id;
  const updatedHospital = req.body;

  hospitals[hospitalId] = updatedHospital;

  // Save the updated data back to the JSON file
  fs.writeFileSync('hospitals.json', JSON.stringify(hospitals, null, 2));

  res.json(updatedHospital);
});

// To delete a hospital
app.delete('/hospitals/:id', (req, res) => {
  const hospitalId = req.params.id;
  hospitals.splice(hospitalId, 1);

  // Save the updated data back to the JSON file
  fs.writeFileSync('hospitals.json', JSON.stringify(hospitals, null, 2));

  res.json({ message: 'Hospital deleted' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); //template literal
});
