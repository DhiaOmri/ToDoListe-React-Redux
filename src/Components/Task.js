import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState,useEffect } from "react";
import {
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
  MDBValidation,
} from "mdb-react-ui-kit";
import { faCheck, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CompletedTask, deletTask, editTask, updateTask } from "../Actions/Action";

const Task = ({ item: { id,task_descrp, completed } }) => {
  const [basicModal, setBasicModal] = useState(false);
  const [idModal, setidModal] = useState("");
  const [todoo, stetodoo] = useState("");

  const dispatch = useDispatch  ()  
  const toggleShow = (e) => { 
    setBasicModal(!basicModal); 
    setidModal(e.target.getAttribute("id"));

  }
  const handleClick = (e) => {
    if (e.target.id === "completed") {
      dispatch(CompletedTask(id));
    }
    if (e.target.id === "delete") {
      dispatch(deletTask(id));
    }
    if (e.target.id === "edit") {
      dispatch(updateTask({id,task_descrp,completed}));
      setBasicModal(!basicModal);
      setidModal(e.target.getAttribute("id"));
    }
    
  };


const current =useSelector(state=> state.current)
const [taskedit,setTaskedit]=useState("")
useEffect(() => {
  current && setTaskedit(current.task_descrp);
}, [current]);

const handleChange=(e)=>{
  console.log(taskedit,"hhhhhhhhhhhhhhhhhhh");
  if (!taskedit) {
    return toast.warning("please fill a field !!!");
  }
  else{
    const taskUpdated={
      id:current.id,
      task_descrp:taskedit,
    }
    dispatch(editTask(taskUpdated))
    toast.success("task Updated");
    setBasicModal(!basicModal);
    setidModal(e.target.getAttribute("id"));
  }

}
  return (
    <tr>
      <td onClick={handleClick} id="completed">
        <FontAwesomeIcon 
        className={`${completed && "success "} icone`}
        icon= {faCheck}
        style={{ fontSize: "25px", color: "#607d8b" }}
        />
      </td>
      <td   className={`${completed && "completed"}`}>{task_descrp}</td>
      
      <td onClick={handleClick} id="edit">
        <FontAwesomeIcon
          className="icone"
          icon={faEdit}
          style={{ fontSize: "25px", color: "#607d8b" }}
        />
      </td>
      <td onClick={handleClick} id="delete">
        <FontAwesomeIcon
          className="icone"
          icon={faTrashAlt}
          style={{ fontSize: "25px", color: "#f44336" }}
        />
      </td>

      <MDBModal
        show={basicModal}
        getOpenState={(e) => setBasicModal(e)}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Update the Task</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
              onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBValidation>
                <MDBInput
                  validation="Looks good!"
                  validationTooltip
                  label="Iteme"
                  id="validationTooltip01"
                  name="fname"
                  value={taskedit}
                  onChange={e => setTaskedit(e.target.value)}
                  required
                  className="w-100"
                />
                            <MDBModalFooter>
              <MDBBtn onClick={handleChange}>Save changes</MDBBtn>
            </MDBModalFooter>
              </MDBValidation>
            </MDBModalBody>


          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </tr>
  );
};

export default Task;
