const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const fs = require('fs');
const pdfParse = require('pdf-parse');

let gitaText = '';

let dataBuffer = fs.readFileSync('./gita_pdf.pdf');

pdfParse(dataBuffer).then(function(data) {
    gitaText = data.text;
});

app.post('/api/query', (req, res) => {
  const query = 'Q: ' + req.body['query'];
  const startIndex = gitaText.indexOf(query);
  
  if (startIndex === -1) {
    res.json({ response: 'Question not found in Gita' });
    return;
  }

  const endIndex = gitaText.indexOf('Q: ', startIndex + query.length);
  const answer = gitaText.substring(startIndex, endIndex !== -1 ? endIndex : undefined);

  res.json({ response: answer });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});