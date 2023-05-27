import React, { useReducer, useState } from "react";
// quan li cac state phuc tap

// ham reducer tra ve gi thi state se duoc set lai nhu the
const reducer = (state, action) => {
  // logic
  if (action.type === "ADD_TODO") {
    return [...state, { id: state.length + 1, title: action.payload.title }];
  }
  if (action.type === "DELETE_TODO") {
    return state.filter((todo) => todo.id !== action.payload.id);
  }
  return state;
};

const LearnUseReducer = () => {
  const [lists, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");

  const handleAddTodo = () => {
    setTitle("");
    dispatch({
      type: "ADD_TODO",
      payload: { title: title },
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: { id: id },
    });
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
              onClick={() => deleteTodo(a.id)}
            >
              x
            </span>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearnUseReducer;
