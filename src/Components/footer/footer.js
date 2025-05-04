import React from 'react';
import './footer.css';

function footer() {
  return (
    <footer className="footer">
      <p>Designed and Developed by Anto Kochumon</p>
      <p>&copy; {new Date().getFullYear()} Netflix Clone. All Rights Reserved.</p>
    </footer>
  );
}

export default footer;
