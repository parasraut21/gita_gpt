const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const fs = require('fs');
const pdfParse = require('pdf-parse');

let gitaText = '';

let dataBuffer = fs.readFileSync('./Bhagavad_Gita_As_It_Is.pdf');

pdfParse(dataBuffer).then(function(data) {
    gitaText = data.text;
});

console.log(gitaText);
app.post('/api/query', (req, res) => {
  const query = req.body['query'];
  const response = gitaText.includes(query) ? 'Found in Gita' : 'Not found in Gita';
  console.log(query);
  res.json({ response });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});