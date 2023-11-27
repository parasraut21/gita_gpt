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

  console.log('Query:', queryWords);

  let maxMatchCount = 0;
  let bestMatch = "In the realm of my knowledge, it seems this particular query is not tucked away in the data I've been trained on. But fear not, I'm still here to chat or assist in any way I can on other topics!";

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
        let answer = '';
        for (let j = i + 1; j < lines.length && !lines[j].startsWith('q: '); j++) {
          answer += '\n' + lines[j];
        }
        bestMatch = answer.replace('a: ', '').trim(); // Remove 'a: ' prefix and leading and trailing whitespace
      }
    }
  }

  res.json({ response: bestMatch });
});

app.listen(5000, () => {
  console.log('Server is running on port 3000');
});