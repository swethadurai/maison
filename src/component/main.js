import React, { Component } from 'react';

import './main.css';
import axios from 'axios'
import Fetchdata from "./range.js"
import Card from './card';
import data from "./data.js"


function MyComponent() {
  const card=data.map(item=>
    {
      return(
        <Card
        id={item.id}
        Img={item.houseImg}
        bhk={item.bhk}
        location={item.location}
        rent={item.rent}
        advance={item.advance}
        sqFeet={item.sqFeet}
        bath={item.bath}
        aboutPlace={item.aboutPlace}

        contactNo={item.contactNo}/>
      )
    }
  )

 


    return (
      <div className='main'>
        <div className='filters'>
          <div id="appliedfilters">
            <h2 >applied filters</h2>
            <a href="">clear all</a>
          </div>




          <br />

          <hr />
          <div className='price'>
            <h4>price</h4>
        

            <div>
             
              <label for="price">0</label>
              <Fetchdata/>
            </div>

          </div>
          <br />

          <hr />
          <div className='sq.feet'>
            <h4>sq.feet</h4>
            <p>0</p>
            <Fetchdata/>

          </div>
          <br />

          <hr />
          <div>
            <h4>furnishing status</h4>
            <input type='checkbox' />fully furnished<br />
            <input type='checkbox' />not furnished<br />
            <input type='checkbox' />half<br />

          </div>
          <br />

          <hr />


          <h3>age of property</h3>
          <input type='checkbox' />1-5years<br />
          <input type='checkbox' />5-10yrs<br />
          <input type='checkbox' />10+yrs<br />
          <br />

          <hr />
          <h3>no.of bedrooms</h3>
          <input type='checkbox' />1BHK<br />
          <input type='checkbox' />2BHK<br />
          <input type='checkbox' />3BHK<br />
          <br />

          <hr />
          <h3>types of property</h3>
          <input type='checkbox' />Appartment<br />
          <input type='checkbox' />villa<br />
          <input type='checkbox' />house<br />
          <br />

          <hr />
          <h3>available for</h3>
          <input type='checkbox' />men<br />
          <input type='checkbox' />women<br />
          <input type='checkbox' />married<br />

        </div>
       
        
{card}
      </div>
      
    )
    }
  
  export default MyComponent;