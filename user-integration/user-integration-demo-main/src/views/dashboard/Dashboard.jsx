import { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from '../../shared/header';

// Agregar estilos sin un css externo

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <Header />
            <h1>Dashboard</h1>
            <input
                type="text"
                placeholder="Search by name"
                value={search}
                onChange={handleSearchChange}
                style={searchBarStyle}
            />
            <div style={cardContainer}>
                {filteredUsers.map(user => (
                    <Card
                        key={user.id}
                        user={user}
                    />
                ))}
            </div>
        </div>
    );
}

const cardContainer = { 
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
};

const searchBarStyle = {
    margin: '20px 20px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',

};

export default Dashboard;
