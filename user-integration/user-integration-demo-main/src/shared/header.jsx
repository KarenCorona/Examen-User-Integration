//hacer un header para la pagina
//con estilos (sin un css externo)

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Integración de Usuarios</h1>
            <Link style={linkStyle} to="/">Dashboard</Link> | <Link style={linkStyle} to="/register">Registrar</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;