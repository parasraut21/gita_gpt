import { useState } from 'react'

import './App.css'

function App() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const sendQuery = async () => {
    const res = await fetch('/api/query', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={sendQuery}>Ask</button>
      <p>{response}</p>
    </div>
  );
}

export default App
