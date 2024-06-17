import React from "react";
import Todo from "./Todo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAction } from "../redux/todoSlice";
import { IoAdd } from "react-icons/io5";

const Home = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const add = () => {
    dispatch(todoAction.Addtodo(data));
    setData("");
  };

  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <h1 className="text-2xl font-bold text-slate-600 tracking-widest">
        Enter Your Task
      </h1>
      <div className="flex justify-center items-center gap-5 mt-2">
        <input
          type="text"
          name="todo"
          id="todo"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="border text-center text-xl p-2  outline-none rounded-lg   placeholder:text-xl  w-96"
          placeholder="Add todays todo"
        />

        <button onClick={() => add()}>
          <IoAdd className="text-4xl bg-orange-400 text-white rounded-lg" />
        </button>
      </div>
      <div>
        <Todo />
      </div>
    </div>
  );
};

export default Home;
