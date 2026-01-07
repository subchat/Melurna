import React from 'react';

type Props = {
  children?: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 16 }}>
      {children}
    </div>
  );
};

export default Layout;
