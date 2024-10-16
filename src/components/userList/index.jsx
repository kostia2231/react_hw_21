import { useSelector } from "react-redux";
import { selectUsers } from "../../slices/userSlice";

export default function UserList() {
  const users = useSelector(selectUsers);

  return (
    <>
      <div>
        <h1>User List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} {user.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
