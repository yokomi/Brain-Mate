import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/blog">
          Blog
        </Link>
        <Link href="/signup">
          Sign Up
        </Link>
        <Link href="/login">
          Login
        </Link>
        <Link href="/dashboard">
          Dashboard
        </Link>
      </nav>
    </header>
  );
};

export default Header;
