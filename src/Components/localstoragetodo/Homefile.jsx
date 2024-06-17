import React, { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import Todoslist from "./Todoslist";
import { toast } from "react-toastify";
const Homefile = () => {
  const [tododata, setTododata] = React.useState("");
  const [task, setTask] = React.useState([]);

  const [showdata, setShowdata] = useState(true);
  const add = () => {
    if (tododata.length === 0) {
      toast.error("Enter a task please !");
    } else {
      const newtask = { id: Date.now(), name: tododata };
      setTask([...task, newtask]);
      localStorage.setItem("tasks", JSON.stringify([...task, newtask]));
      setTododata("");
    }
  };

  // we used useeffect for the time of refresh the page , No data lose
  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      const storedlist = JSON.parse(localStorage.getItem("tasks"));
      setTask(storedlist);
    }
  }, []);
  return (
    <section className="w-full mt-20 flex justify-center items-center">
    <div className=" flex flex-col justify-center items-center w-[40rem] border p-5 rounded-lg shadow-xl">
      {/* {showdata ? (
        ""
      ) : (
        <div className="flex justify-center items-center">
          <div className="flex  items-center position-relative mr-8">
            <textarea
              type="text"
              rows={4}
              className="mt-4 w-96 rounded-lg p-3 border text-xl font-medium outline-none
                 hover:bg-slate-500 hover:text-white
                "
              value={edit}
            />

            <div className="position-absolute top-20 left-72">
              <button
                className="text-red-600 border text-[14px] font-bold p-2 mt-4 rounded-lg"
                onClick={() => setShowdata(true)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )} */}
      <h1 className="text-center  mt-4 tracking-widest">Enter your task</h1>

      <div className="mt-6 flex gap-3">
        <div>
          <input
            type="text"
            className="border text-center text-xl p-2  outline-none rounded-lg   placeholder:text-xl  w-96 tracking-widest  bg-slate-200 placeholder:text-black"
            placeholder="Enter task"
            onChange={(e) => setTododata(e.target.value)}
            value={tododata}
          />
        </div>
        <div>
          <button onClick={add}>
            <IoAdd className="text-4xl bg-orange-400 text-white rounded-lg" />
          </button>
        </div>
      </div>
      <div>
        <Todoslist
          tododata={task}
          setTask={setTask}
          // setEdit={setEdit}
          setShowdata={setShowdata}
        />
      </div>
    </div>
    </section>
  );
};

export default Homefile;
