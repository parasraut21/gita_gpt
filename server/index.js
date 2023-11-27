const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const fs = require('fs');
const pdfParse = require('pdf-parse');

let gitaText = '';

let dataBuffer = fs.readFileSync('./gita_pdf1.pdf');

pdfParse(dataBuffer).then(function(data) {
    gitaText = data.text.toLowerCase();
});

app.post('/api/query', (req, res) => {
  const queryWords = req.body['query'].toLowerCase().split(' ');
  const lines = gitaText.split('\n');

  let maxMatchCount = 0;
  let bestMatch = 'Question not found in Gita';

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('q: ')) {
      const questionWords = lines[i].split(' ');
      let matchCount = 0;
      for (const word of queryWords) {
        if (questionWords.includes(word)) {
          matchCount++;
        }
      }
      if (matchCount > maxMatchCount) {
        maxMatchCount = matchCount;
        let answer = lines[i];
        for (let j = i + 1; j < lines.length && !lines[j].startsWith('q: '); j++) {
          answer += '\n' + lines[j];
        }
        bestMatch = answer;
      }
    }
  }

  res.json({ response: bestMatch });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});