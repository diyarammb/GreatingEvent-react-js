import React from 'react';
import "./index.css";




function Greating(){
  var today = new Date();
  var time = today.getHours();
  
    let curDate= new  Date(2021,6,3,time);
curDate =curDate.getHours();
let greating="";
const cssStyle={

};
if(curDate >=1 && curDate <12){
greating="Good Morning";
cssStyle.color="green";
}else if( curDate>=12 && curDate <19){
greating="Good afternoon";
cssStyle.color="Orange";
}else{
  greating="Good Evening";
  cssStyle.color="black";
}
return <div>
<h1>Hello Daya  ,<span style={cssStyle}> {greating}</span> </h1> 
</div>  ;

}
export default Greating;