import { MDBBtn, MDBInput, MDBRadio, MDBValidation } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { addTask, filterTasks } from "../Actions/Action";
import "./style.css";

const Addtask = () => {
  const [todo, stetodo] = useState("");

  const todos = useSelector((state) => state.todos);
  console.log(todos.task_descrp);
  const dispatch = useDispatch();
  const handleSubmt = (e) => {
    e.preventDefault();
    const checkTask = todos.find((task) => task.task_descrp === todo && todo);
    if (!todo) {
      return toast.warning("please fill a field !!!");
    }
    if (checkTask) {
      return toast.warning("this task already exists !!!");
    } else {
      const data = {
        id: parseInt(Math.random() * 100000),
        task_descrp:todo,
        completed: false,
      };
      dispatch(addTask(data));
      stetodo("");
      toast.success("task added");
      console.log(data);
    }
  };
  const handlerFilter=(e)=>{
    dispatch(filterTasks(e.target.value))
  }
  return (
    <>
    
   
    <MDBValidation
      className="row g-3  mt-5 m-auto justify-content-center"
      
      onSubmit={handleSubmt}
    >
      <div className="col-md-8 position-relative d-flex">
        <MDBInput
          validation="Looks good!"
          validationTooltip
          label="Iteme"
          id="validationTooltip01"
          name="fname"
          value={todo}
          onChange={(e) => stetodo(e.target.value)}
          required
          className="w-100"
        />
        <MDBBtn type="submit" className="btn-sub">
          Add To liste
        </MDBBtn>
      </div>
      <div className="col-md-7 position-relative d-flex justify-content-around filter-chekboxs" >
        
      <MDBRadio name='inlineCheck' id='inlineCheckbox1' value='all' label='All' inline onClick={handlerFilter}/>
      <MDBRadio name='inlineCheck' id='inlineCheckbox2' value='completed' label='Completed' inline onClick={handlerFilter}/>
      <MDBRadio name='inlineCheck' id='inlineCheckbox2' value='not_completed' label='Not Completed' inline onClick={handlerFilter}/>
    </div>
    </MDBValidation>
   
      

    </>
  );
};

export default Addtask;
