import React from "react";
import "./Leftbar.css";
const Leftbar=()=>{

   return(
<>
<div className="left">
<nav>
<ul className="nav flex-column">
  <li className="nav-item">Dashboard</li>
  <li className="nav-item">Doctor</li>
  <li className="nav-item">Hospital</li>
  <li className="nav-item">Pharmacy</li>
  <li className="nav-item">Ambulance</li>
  <li className="nav-item">Diagnostics</li>
  <li className="nav-item">Health Book</li>
  
</ul>
</nav>
</div>

<div className="right">
<div className="hed"> <h2>Health Book</h2>
<h5>Dashboard/<span>Health Book</span></h5>
</div>
{/* <p style={{ }}></h3><p> </p></p> */}
{/* <div className="hed"> */}

      {/* </div> */}


      <div className="table-boxx">
  <span>Show <select id="cars" name="cars" size="1" >
    <option value="volvo">1</option>
    <option value="saab">2</option>
    <option value="saab">3</option>
    <option value="fiat">4</option>
    <option value="fiat">5</option>
    <option value="fiat">6</option>
    <option value="fiat">7</option>
    <option value="fiat">8</option>
    <option value="fiat">9</option>
    <option value="fiat">10</option>
     </select>entries</span>
     </div>
     <div className="table-box">
     <table className="table table-striped">
     <thead>
    <tr>
     
    <th scope="col">TestName</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Reading</th>
      <th scope="col">Unit</th>
      <th scope="col">View</th>
    </tr>

    <tr>
    <td><div style={{ display:'flex', flexDirection:'row', justifyContent:'centre',alignItems:'centre'}} className="imag"><img src="imag/vector1.png" class="imag"/></div>Weight</td>
    <td>12/07/2022</td>
    <td>12:00</td>
    <td>64</td>
    <td>19</td>
    <td> <img src="images/eye.png" class="image1"/></td>
  </tr>
  <tr>
    <td><div class="imag"><img src="imag/vector2.png" class="imag"/></div>Covid-19</td>
    <td>18/07/2022</td>
    <td>14:00</td>
    <td>-</td>
    <td>-</td>
    <td><img src="images/eye.png" class="image1"/></td>
  </tr>
  <tr>
    <td><div class="imag"><img src="imag/vector3.png" class="imag"/></div>Temprature</td>
    <td>17/06/2022</td>
    <td>07:19</td>
    <td>100.4</td>
    <td>F</td>
    <td><img src="images/eye.png" class="image1"/></td>
  </tr>

  <tr>
    <td><div class="imag"><img src="imag/vector4.png" class="imag"/></div>Pulse</td>
    <td>18/07/2022</td>
    <td>14:00</td>
    <td>80</td>
    <td>BPM</td>
    <td><img src="images/eye.png" class="image1"/></td>
  </tr>
  <tr>
    <td><div class="imag"><img src="imag/vector4.png" class="imag"/></div>Blood pressure</td>
    <td>18/07/2022</td>
    <td>14:00</td>
    <td>110</td>
    <td>mmHG</td>
    <td><img src="images/eye.png" class="image1"/></td>
  </tr>

  </thead>

     </table>
  
  </div>
  
</div>


   




</>





   ) 
}
 export default Leftbar