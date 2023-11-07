// import User from "../user/User";

import User from "../user/UserTest";

export default function UserList(props) {
    return (
        <ul className="users-list">
            <div>
                <h1>{User.name}</h1>
            </div>
        </ul>
    )
}