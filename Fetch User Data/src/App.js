import React, { useState } from "react";
import UserCardsList from "./UserCardsList";
import Navbar from "./Navbar";
import "./App.css";

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [gotUsers, setGotUsers] = useState(false);

    const getUsers = async () => {
        setLoading(true);
        const response = await fetch("https://reqres.in/api/users?page=1");
        const responseData = await response.json();

        setTimeout(() => {
            setGotUsers(true);
            setLoading(false);
        }, 1000);

        setUsers(responseData.data);
        console.log(responseData.data);
    };

    return (
        <>
            <Navbar getUsers={getUsers} />
            <UserCardsList
                users={users}
                loading={loading}
                gotUsers={gotUsers}
            />
        </>
    );
}

export default App;
