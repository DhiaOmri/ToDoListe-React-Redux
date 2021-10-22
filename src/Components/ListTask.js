import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
const ListTask = () => {
  const [taskliste, setTaskliste] = useState([]);
  const todos = useSelector((state) => state.todos);
  const filterTasks = useSelector((state) => state.filtredTasks);

  useEffect(() => setTaskliste(todos), [todos]);
  useEffect(() => setTaskliste(filterTasks), [filterTasks]);

  return (
    <div className="col-md-8 position-relative mt-4">
      <MDBTable striped hover>
        <MDBTableHead dark>
          <tr>
            <th scope="col" className=""></th>
            <th scope="col" className="todo-col">
              To Do
            </th>
            <th scope="col" className="edit-col">
              Edit
            </th>
            <th scope="col" className="delet-col">
              Delete
            </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {taskliste.length > 0 &&
            taskliste.map((el, id) => <Task key={id} item={el} />)}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default ListTask;
