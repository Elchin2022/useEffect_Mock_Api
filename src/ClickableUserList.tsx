

const ClickableUserList = ({ users,onChange,id }: any) => {
  
  // console.log(id, "iddddd from clickable user listtt component");

  return (
    <div>
      <ul className={""}>
        {users?.map((user: any) => (
          <li
            key={user.id}
            onClick={() =>onChange(user.id) }
            className={`border p-2 m-2 rounded-xl ${
              user.id === id ? "bg-gray-200" : ""
            }`}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClickableUserList;
