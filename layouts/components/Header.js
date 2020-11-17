import React from 'react'
import Logo from '@/layouts/components/Logo'
import Social from '@/layouts/components/Social'

const Header = () => (
  <div className="w-full container mx-auto p-6">
    <div className="flex justify-between items-center">
      <Logo />
      <Social />

    </div>
  </div>

);

export default Header
