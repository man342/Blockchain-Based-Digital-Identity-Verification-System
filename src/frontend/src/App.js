import React, { useState } from 'react';

const App = () => {
    const [id, setId] = useState('');
    const [status, setStatus] = useState('');

    const handleVerify = async () => {
        const response = await fetch('http://localhost:3000/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });
        const data = await response.json();
        setStatus(data.message);
    };

    return (
        <div>
            <h1>Identity Verification</h1>
            <input
                type="text"
                placeholder="Enter ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button onClick={handleVerify}>Verify</button>
            <p>{status}</p>
        </div>
    );
};

export default App;
