import React from "react";
import Card from "./Card";
import { TailSpin } from "react-loader-spinner";
export default function UserCardsList({ users, loading, gotUsers }) {
  if (loading && !gotUsers) {
    return (
      <>
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass="spinner"
          visible={true}
        />
        ;
      </>
    );
  } else {
    return (
      <>
        <div className="container-fluid row">
          {users.map((user) => {
            return <Card key={user.id} user={user} />;
          })}
        </div>
      </>
    );
  }
}
