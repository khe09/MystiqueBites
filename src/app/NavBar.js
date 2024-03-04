'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Box, Button } from '@mui/material';
import './NavBarStyles.css';

export default function NavBar() {
    const pathname = usePathname();
    const title = "MystiqueBites";
    const links = [
        { path: '/', name: 'Home' }, 
        { path: '/about', name: 'About' },
    ];

    return (
        <Box className="navbar">
            <h2>{title}</h2>
            { links.map(l => {
                const isActive = l.path === pathname;
                return (
                    <Button 
                        component={Link}
                        href={l.path}
                        className={`navbar-button ${isActive ? 'active' : ''}`}
                        key={l.path}
                    >
                        {l.name}
                    </Button>
                );
            })}
            <Button 
                component={Link}
                href="/form"
                className="navbar-button"
            >
                Start
            </Button>
        </Box>
    );
}
