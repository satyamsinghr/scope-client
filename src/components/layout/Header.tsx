import React from 'react';

interface HeaderProps {
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
    <div>
      <button onClick={onLogout}>Logout</button>
      {/* Other header content */}
    </div>
  );
};

export default Header;
