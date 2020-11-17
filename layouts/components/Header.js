import React from 'react'
import TpLogo from '@/layouts/components/TpLogo'
import Social from '@/layouts/components/Social'

const Header = () => (
  <div className="w-full container mx-auto p-6">
    <div className="flex justify-between items-center">
      <TpLogo />
      <Social />
    </div>
  </div>

);

export default Header
