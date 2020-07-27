import React from 'react';
import TPLogo from '@/layouts/components/TPLogo';
import Social from '@/layouts/components/Social';

const Header = () => (
  <div className="w-full container mx-auto p-6">
    <div className="flex justify-between items-center">
      <TPLogo />
      <Social />

    </div>
  </div>

);

export default Header;