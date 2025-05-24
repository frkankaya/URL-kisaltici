import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setShortUrl('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });

      if (!response.ok) throw new Error('API error');

      const data = await response.json();

      setShortUrl(data.shortened_url);

    } catch (err) {
      setError('Url kisaltilirken hata olustu')
    } finally {
      setLoading(false)
    }
  };

  return (
    <div style={{
      maxWidth: 600,
      margin: '80px auto',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 12px rgba(0, 0, 0, .1)',
      borderRadius: '8px'
    }}>

      <h1 style={{
        textAlign: 'center',
        color: '#333'
      }}>URL Shortener</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
        <input
          type="url"
          placeholder="URL girin"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          style={{
            width: '80%',
            padding: '10px',
            flex: 1,
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        ></input>

        <button type="submit" disabled={loading}
          style={{
            marginLeft: '8',
            padding: '0 20px',
            color: '#fff',
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '16x'
          }}>
          Shorten
        </button>
      </form>

      {shortUrl && (
        <p style={{
          marginTop: '20px', color: '#006400'
        }}>
          Shortened URL:{' '}
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </p>
      )}

      {error && (
        <p syle={{
          marginTop: '20px',
          color: '#a00'
        }}>{error}</p>
      )}
    </div>
  );
}

export default App;