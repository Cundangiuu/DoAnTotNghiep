'use client'; // nếu dùng sự kiện, nhưng tạm thời có thể bỏ nếu không cần

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
      <Link href="/" style={{ marginRight: '1rem' }}>Trang chủ</Link>
      <Link href="/about">Giới thiệu</Link>
    </nav>
  );
}
