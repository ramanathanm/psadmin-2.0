import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = ({location}) => {
  return (
    <div>
      <h4>OOPS!! The page you are looking for does not exist - {location.pathname}</h4>
      <Link to="/home" className = "btn btn-primary">Back to Home</Link>
    </div>
  );
}

export default NotFoundPage;