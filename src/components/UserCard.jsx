import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import '../App.css';

const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            <Link to={`/user/${user.id}`} className="user-card-link" style={{ textDecoration: 'none', color: 'black' }} > <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                <h3>{`${user.first_name} ${user.last_name}`}</h3>
            </Link>
        </div >
    );
};
UserCard.propTypes = {
    user: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
};

export default UserCard;
