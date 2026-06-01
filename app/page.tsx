'use client';
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState(['Welcome to the terminal.', 'Type help to see commands.']);

  function execute(e) {
    e.preventDefault();
    const command = input.toLowerCase();

    if (command === 'help') {
      setPosts([...posts, '> help', 'Commands: post [text], ls, clear']);
    } else if (command.startsWith('post ')) {
      const text = input.substring(5);
      setPosts([...posts, `> ${input}`, 'Post saved!']);
    } else if (command === 'ls') {
      setPosts([...posts, '> ls', ...posts.filter(p => !p.startsWith('>'))]);
    } else if (command === 'clear') {
      setPosts([]);
    } else {
      setPosts([...posts, `> ${input}`, 'Unknown command.']);
    }

    setInput('');
  }

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'monospace' }}>
      <div style={{ marginBottom: '20px' }}>
        {posts.map((p, i) => (
          <div key={i}>{p}</div>
        ))}
      </div>
      <form onSubmit={execute} style={{ display: 'flex' }}>
        <span>{'>'}</span>
        <input 
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ background: 'none', border: 'none', color: 'white', outline: 'none', marginLeft: '10px', width: '100%', fontFamily: 'monospace' }}
        />
      </form>
    </div>
  );
}