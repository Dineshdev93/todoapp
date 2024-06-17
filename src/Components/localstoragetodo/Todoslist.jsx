import React from "react";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa6";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Todoslist = ({ tododata, setTask }) => {
  // Delete function
  const Delete = (id) => {
    const data = tododata.filter((item) => item.id !== id);
    localStorage.setItem("tasks", JSON.stringify(data));
    setTask(data);
  };
  const [edit, setEdit] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    {/* bootstarp modal to view tasks */}
      <div>
        <Modal show={show}>
          <Modal.Body
            style={{
              backgroundColor: "white",
              fontWeight: "500",
              textAlign: "center",
              fontSize: "20px",
              letterSpacing: "2px",
            }}
          >
            {edit}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="flex flex-col justify-center items-center">
        {!tododata
          ? ""
          : tododata.map((item, index) => {
              return (
                <>
                  <div className="flex border w-96 justify-between items-center px-3 mr-[54px] mt-10 bg-white p-2 rounded-lg">
                    <div className="bg-white text-xl font-semibold">
                      {item.name}
                    </div>
                    <div className="flex items-center gap-3 bg-white">
                      <div>
                        <FaRegEye
                          className="text-2xl text-green-600 cursor-pointer bg-white"
                          onClick={() => {handleShow()
                            setEdit(item.name)
                          }}
                        />{" "}
                      </div>

                      <div>
                        <RiDeleteBin3Fill
                          onClick={() => Delete(item.id)}
                          className="text-red-700 text-2xl cursor-pointer hover:first-letter:edit bg-white"
                        />{" "}
                      </div>
                      <div>
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
      </div>
    </>
  );
};

export default Todoslist;
