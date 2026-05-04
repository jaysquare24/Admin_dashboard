import { UserCard } from "./components/UserCard";
import { useGetUser } from "../../hook/useGetUser";
import { useState, useEffect } from "react";
import { Loader } from "../../components/common/Loader";
import { ErrorState } from "../../components/common/ErrorState";

export const Users = () => {
  const { users, error, isLoading } = useGetUser();

  const [iuUsers, setIuUsers] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [userStatus, setUserStatus] = useState({});

  useEffect(() => {
    setIuUsers(users);
  }, [users]);

  const onDeleteUser = (userId) => {
    setIuUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== userId)
    );

    setSuccessMessage("User deleted successfully.");
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const onToggleUserStatus = (userId) => {
    setUserStatus((prevStatus) => {
      const currentStatus = prevStatus[userId] ?? true;

      return {
        ...prevStatus,
        [userId]: !currentStatus,
      };
    });
  };

  if (isLoading) {
    return <Loader fullScreen={true} />;
  }

  if (error) {
    return (
      <ErrorState
        message={error}
        onRetry={() => window.location.reload()}
      />
    );
  }

  return (
    <section className="users">
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}

      <h2>Users</h2>

      <div className="user-list">
        {iuUsers.length > 0 &&
          iuUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              isActive={userStatus[user.id] ?? true}
              onToggleUserStatus={() => onToggleUserStatus(user.id)}
              onDeleteUser={() => onDeleteUser(user.id)}
            />
          ))}
      </div>
    </section>
  );
};