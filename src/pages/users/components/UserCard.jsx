export const UserCard = ({user, isActive, onToggleUserStatus, onDeleteUser}) => {
    return (
        <div className="user-card">
            <p className="user-name">{`${user?.name?.firstname} ${user?.name?.lastname}`}</p>
            <div className="user-info">
                <p>Username: {user.username}</p>
                <p>Status: <span className={isActive ? "status-active" : "status-inactive"}>{isActive ? "Active" : "Inactive"}</span></p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Role: Customer</p> 
                
            </div>
            <div className="user-actions actions">
                <button className="edit-btn" onClick={() => onToggleUserStatus(user.id)}>
                    {isActive ? "Deactivate" : "Activate"}
                </button>
                <button className="delete-btn" onClick={() => onDeleteUser(user.id)}>
                    Delete
                </button>
            </div>
        </div>
    )
}