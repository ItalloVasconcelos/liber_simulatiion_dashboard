import React from 'react';

const AuthTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div style={{ backgroundColor: '#f5f5f5', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                {children}
            </div>
        </div>
    );
};

export default AuthTemplate;
