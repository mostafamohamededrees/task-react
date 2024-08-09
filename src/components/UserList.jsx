import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/userActions';
import UserCard from './UserCard';

const UserList = () => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers(page));
    }, [dispatch, page]);
    // console.log(users)

    return (
        <div className="user-list">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="users">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
            <div className="pagination" >
                <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
                    Previous
                </button>
                <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
            </div>
        </div>
    );
};

export default UserList;
