import { useSelector } from "react-redux";

function Admin() {

  function time() {
    
    var currentdate = new Date(); 
    var timenow = 
                + currentdate.getMonth() + "/"
                + currentdate.getDate() + "/"
                + currentdate.getFullYear() + " at "
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() 
              
      document.getElementById("datebtn").innerHTML = "time is "+timenow;
    }

  return (
    <div>
      <h1>Super Admin</h1>
      <p id="datebtn">time is </p>
      <button type="button" onClick= {time} >click to show the time</button>
    
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Time Order Placed</th>
          <th>Type</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lucas</td>
          <td>Date</td>
          <td>Pickup</td>
          <td>$15</td>
        </tr>
        <tr>
          <td>Lucas</td>
          <td>Date</td>
          <td>Pickup</td>
          <td>$15</td>
        </tr>
        <tr>
          <td>Lucas</td>
          <td>Date</td>
          <td>Pickup</td>
          <td>$15</td>
        </tr>
        <tr>
          <td>Lucas</td>
          <td>Date</td>
          <td>Pickup</td>
          <td>$15</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default Admin;
