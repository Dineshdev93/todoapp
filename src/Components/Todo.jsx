import { useDispatch, useSelector } from "react-redux";
import { todoAction } from "../redux/todoSlice";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
const Todo = () => {
  const [todoshow, setTodoshow] = useState(false);
  const handleClose = () => setTodoshow(false);
  const handleShow = () => setTodoshow(true);

  // get input element data through todoslice intialstate
  const tododata = useSelector((store) => store.tododata);
  
  //  send  id of selected item to todoslice Deletetodo function
  const dispatch = useDispatch();
  const Delete = (id) => {
    dispatch(todoAction.Deletetodo(id));
  };


  return (
    <div>
      {!tododata ? "" :tododata.map((item, index) => {
        return (
          <>
            <div className="flex border w-96 justify-between items-center px-3 mr-[54px] mt-10 bg-slate-300 p-2 rounded-lg">
              <div className="text-slate-700 text-xl font-semibold">{item}</div>
              <div className="flex items-center gap-3">
                <div>
                  <MdEdit className="text-2xl text-green-600 cursor-pointer" />{" "}
                </div>

                <div>
                  <RiDeleteBin3Fill
                    onClick={() => Delete(index)}
                    className="text-red-700 text-2xl cursor-pointer hover:first-letter:edit"
                  />{" "}
                </div>

                <div>
                  <FaRegEye className="text-2xl text-teal-600 cursor-pointer" onClick={handleShow} />
                  <Modal show={todoshow} onHide={handleClose}>  
                    <Modal.Body style={{color:"gray", fontWeight:"500" ,textAlign:"center", fontSize:"20px", letterSpacing:"2px"}}>
                      {item}
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="danger" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Todo;
