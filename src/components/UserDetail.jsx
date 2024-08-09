import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetails } from '../redux/actions/userActions';

const UserDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userDetails, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUserDetails(id));
  }, [dispatch, id]);

  // console.log(userDetails);

  return (
    <div className="user-detail">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userDetails && (
        <>
          <img src={userDetails.avatar} alt={`${userDetails.first_name} ${userDetails.last_name}`} />
          <h1>{`${userDetails.first_name} ${userDetails.last_name}`}</h1>
          <p>Email: {userDetails.email}</p>
          <button onClick={() => navigate(-1)}>Back</button>
        </>
      )}
    </div>
  );
};

export default UserDetail;
