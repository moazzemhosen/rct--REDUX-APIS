import React, { useEffect, useState } from 'react'
import {  useParams } from "react-router-dom";

const TodoItem = () => {
    const { id } = useParams();
    console.log(id);
//    const navigate = useNavigate();
   const [p, setP] = useState({});
  

   useEffect(() => {
     if (id) {
       async function fetchData() {
         let res = await fetch(`http://localhost:8080/todos/${id}`);
         let data = await res.json();

         setP(data);
       }
       fetchData();
     }
   }, [id]);
   return (
     <div>
       {" "}
       ID:{id}
       <div>
         Name:-{p.value} Price:-{p.isComplete}
       </div>
     </div>
   );
}

export default TodoItem