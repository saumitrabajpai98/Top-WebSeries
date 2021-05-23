//import React from 'react';
                                //App Data//
// let x=8;
// let y=7;

// function App() {
//   return (<>
//     <div>
//     <h1>Sum is: {add(x,y)} </h1>
//     <h1>Subtraction is: {sub(x,y)} </h1>
//     <h1>Multiplication is: {mul(x,y)} </h1>
//     <h1>Division is: {div(x,y)} </h1>
//     </div>
//     </>
//   );
// }

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return (a/b).toFixed(2);
}

//export default add;
export {add,sub,mul,div};