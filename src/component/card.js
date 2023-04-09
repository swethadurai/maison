import React from "react";
import "./card.css"




function Card(props){
    return(
        <div>
             <div className='properties'>
          <picture >
            <img id="img" src="{`../images/${props.Img}`}" width="100%" height="100%"></img>

          </picture>
          <table>
            <tr>
              <td colSpan="3"><h5 ><a href=""> {props.bhk} BHK flat for rent near {props.location}</a></h5></td>

            </tr>
           
            <tr>
              <td>
              {props.rent}
                <span>/month</span>
                <div id="info">deposit ${props.advance}</div>
              </td>
              <td>{props.sqFeet}/sqFeet
                {/* <span>150 sq.meter</span> */}
                <div id="info">build up area</div>
              </td>
              <td>
              
                <span>{props.bath}</span>
                <div id="info">baths</div>
              </td>
            </tr>

            <tr ><td colSpan="3" id="info">{props.aboutPlace}</td></tr>
            <tr><td>
              <button type="button" class="btn btn-dark">Contact</button></td></tr>
              
          </table>

        </div>
        </div>
    )
}
export default Card;