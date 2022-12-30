import React, { useState } from "react";
import {  TextField } from "@material-ui/core";
import { PRODUCTS } from "../products";
const Search = ()=>{

const [searchQuery , setSearchQuery] = useState('');
    
    return(
     
        <form>
            <TextField label="Search" variant="outlined" onChange={(event) => setSearchQuery(event.target.value)}/>
          {
          PRODUCTS.filter((val) =>{
          if(searchQuery=="") {return ;}
          else if(val.productName.toLowerCase().includes(searchQuery.toLowerCase())){
            return val;
          }
          }).map((val,key) =>{
            return(
            <div className="products" key={val.id}>
              <p>{val.productName}</p>
            </div>
          ) } 
          ) }
        </form>
    )
    

};
export default Search;