import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

  setError('');
  setShortUrl('');

  try {
    const response = await fetch('http://localhost:8000/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    });

    if (!response.ok) {
      throw new Error('API hatasi');
    }
    const data = await response.json();
    setShortUrl(data.shortened_url);
  } catch (err) {
    setError('Url kisaltilirken hata olustu')
  }
};

return (
  <div style={{ maxWidth: 600, margin: '50px auto', fontFamily: 'Arial' }}>
    <h1>URL Kısaltıcı</h1>

    <form onSubmit={handleSubmit}>
      <input
        type="url"
        placeholder="URL girin"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        style={{ width: '80%', padding: '8px' }}
      ></input>

      <button type="submit" style={{ padding: '8px 16px', marginLeft: '8' }}></button>
    </form>

    {shortUrl && (
      <p>
        Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
      </p>
    )}

    {error && <p syle={{ color: 'red' }}>{error}</p>}
  </div>
);
}

export default App;