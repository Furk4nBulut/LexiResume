import React from 'react';

function Footer() {
  return (
    <footer style={{ background: '#f8f9fa', padding: '1rem', borderTop: '1px solid #e0e0e0', textAlign: 'center', marginTop: 'auto' }}>
      <small>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</small>
    </footer>
  );
}

export default Footer;