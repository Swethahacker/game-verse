function Navbar() {
    return (
        <nav style={{
            backgroundColor: '#1a1a1a',
            padding: '16px 32px',
            display: 'flex',
            justifyContent: 'Space-between',
            alignItems: 'center',
            borderBottom: '2px solid #00ff88'
        }}>
            <h2 style={{color: '#00ff88', margin: '0'}}>GameVerse</h2>
            <div>
                <span style={{color: '#ffffff', marginRight: '24px'}}>Home</span>
                <span style={{color: '#ffffff', marginRight: '24px'}}>Games</span>
                <span style={{color: '#ffffff'}}>About</span>
            </div>
        </nav>
    );
}

export default Navbar;