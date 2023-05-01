import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
