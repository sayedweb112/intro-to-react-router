import React from 'react';

const User = ({ user }) => {
    const { name, username, email } = user;
    return (
        <div>
            <h3>{name}</h3>
            <p>Email:{email}</p>
            <p>{username}</p>
        </div>
    );
};

export default User;