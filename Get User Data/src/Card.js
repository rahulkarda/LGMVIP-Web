import React from "react";
import "./card.css";
export default function Card({ user }) {
    return (
        <>
            <div className="container custom col-sm-6 col-md-4">
                <div className="user-card ">
                    <img
                        className="avatar"
                        src={user.avatar}
                        alt="avatar"
                    ></img>
                    <h2>User Id: {user.id}</h2>
                    <h2>
                        {user.first_name} {user.last_name}
                    </h2>
                    <h3>{user.email}</h3>
                </div>
            </div>
        </>
    );
}
