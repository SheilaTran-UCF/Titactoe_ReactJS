import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

const LearnUseState = () => {
  // const [lists, setLists] = useState([]);
  // { listState: [lists, setLists] }
  const context = useContext(TodoContext);
  const [lists, setLists] = context.listState;
  // dia chi vung nho : abc
  // filter, map, foreach

  // two way binding
  const [title, setTitle] = useState("");

  const handleAddTodo = () => {
    setTitle("");
    setLists([...lists, { id: lists.length + 1, title: title }]);
  };

  // kieu  tham chieu vs kieu du lieu don gian
  // tham chieu reference: object, function, array
  // don gian primative : number, string, boolean
  // 2
  const handleDeleteTodo = (id) => {
    setLists(lists.filter((todo) => todo.id !== id)); // [viecc 1 ]
  };

  return (
    <div className="p-5">
      <div className="mb-4 d-flex justify-content-start">
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)} //console.log(event.target.value)
        />
        <button onClick={handleAddTodo}>Submit</button>
      </div>
      <ul
        style={{
          maxWidth: "400px",
          marginRight: "auto",
        }}
      >
        {lists.map((a) => (
          <li key={a.id}>
            {a.title}{" "}
            <span
              style={{
                marginLeft: "10px",
                color: "red",
                fontSize: "18px",
                fontWeight: "bold",
              }}
              onClick={() => handleDeleteTodo(a.id)}
            >
              x
            </span>{" "}
          </li>
          // <li key = {1} > viec 1 </li>
        ))}
      </ul>
    </div>
  );
};

export default LearnUseState;
