export default function Home() {
  return (
    <main style={{ backgroundColor: '#000', color: '#0f0', minHeight: '100vh', padding: '50px', fontFamily: 'monospace' }}>
      <div style={{ maxWidth: '800px', margin: 'auto', border: '1px solid #00ff00', borderRadius: '5px', backgroundColor: '#050505', boxShadow: '0 0 20px #003300' }}>
        
        {/* Terminal Header */}
        <div style={{ background: '#1a1a1a', padding: '10px', display: 'flex', gap: '8px', borderBottom: '1px solid #333' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
          <span style={{ color: '#666', fontSize: '12px', marginLeft: '10px' }}>guest@anonmouse-terminal:~</span>
        </div>

        {/* Terminal Content */}
        <div style={{ padding: '30px', fontSize: '18px' }}>
          <p style={{ color: '#fff' }}>[SYSTEM INFO] Initializing Hub...</p>
          <p style={{ color: '#0f0' }}>&gt; Connection established.</p>
          <p style={{ color: '#0f0' }}>&gt; Welcome back, Anonmouse.</p>
          
          <div style={{ marginTop: '30px', display: 'flex', gap: '10px' }}>
            <span style={{ color: '#0f0' }}>$</span>
            <input 
              type="text" 
              placeholder="waiting for input..." 
              autoFocus
              style={{ background: 'none', border: 'none', outline: 'none', color: '#0f0', width: '100%', fontFamily: 'monospace', fontSize: '18px' }} 
            />
          </div>
        </div>
      </div>
      
      <p style={{ textAlign: 'center', marginTop: '20px', color: '#333' }}>
        Press Ctrl+C in terminal to stop server
      </p>
    </main>
  );
}