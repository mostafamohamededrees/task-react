import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (search) {
                setLoading(true);
                try {
                    const response = await axios.get(`https://reqres.in/api/users?page=1`);
                    const users = response.data.data;
                    const filteredUsers = users.filter(user =>
                        user.id.toString().includes(search)
                    );
                    setSuggestions(filteredUsers);
                } catch (error) {
                    console.error('Error fetching users:', error);
                }
                setLoading(false);
            } else {
                setSuggestions([]);
            }
        };

        fetchSuggestions();
    }, [search]);

    const handleSelectUser = (id) => {
        navigate(`/user/${id}`);
        setSearch('');
        setSuggestions([]);
    };

    return (
        <header>
            <input
                type="text"
                placeholder="Search by ID"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {loading && <p>Loading...</p>}
            {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((user) => (
                        <li key={user.id} onClick={() => handleSelectUser(user.id)}>
                            {user.first_name} {user.last_name} (ID: {user.id})
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
};

export default Header;
