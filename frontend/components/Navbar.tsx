"use client";

import React from 'react';
import Image from 'next/image'; // Import Image

const Navbar = () => {
    return (
        <div style={{
            backgroundColor: '#e9ecef',
            padding: '10px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '60px',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1,
        }}>
            {/* Logo */}
            <div style={{ fontSize: '1.5em', cursor: 'pointer' }}>
                <Image src="/Selection.jpg" alt="Logo" width={100} height={40} /> {/* Thay thế biểu tượng menu bằng logo */}
            </div>

            {/* User Info */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '10px' }}>Hi, Binh An Pham</span>
                <span style={{ fontSize: '1.2em', cursor: 'pointer' }}>
                    👤
                </span>
            </div>
        </div>
    );
};

export default Navbar;