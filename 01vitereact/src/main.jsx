import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

//MyApp function me joh bhi hai woh bundler k sahare yeh reactElement me hi convert hota hai .
const ReactElement = {
    type: 'a', //here 'a' is a tag like 'h1' and 'p'(it shows element type )
    props: {
        href :'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit google'
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank'},
    'click me to visit google'
)

createRoot(document.getElementById('root')).render(

    //<MyApp /> //yeh function jaise hi work hoga under bundler ko use karke

    //MyApp()//we can do in this manner also but obviously hum nhi karenge but yes samjhne k liye achha hai ki function ko normally bhi run kar sakte hai .

    //<ReactElement /> //yeh bhi toh run ho jana chahiye tha MyApp ki tarah but huaa nhi .
    //yaha issue yeh hai ki ReactElement ek object hai. nahi ki function and hum function ko <MyApp /> aise karke run kara rhe hai 
  
    //RactElement aise likhenge toh yeh object run ho jayega but yaha nhi ho rha hai kyuki ReactElement hum customreact.js me bnaye the aur waha ek aur function(self made function) banye the joh iss object ko render kara rha tha but yaha hum iss object ko react k under render kara rhe hai isliye nhi ho rha hai kyuki hum khud se hi render karaye the toh hum suitable code likhe the  

    //anotherElement //now this is working
    reactElement
)


//this is for react libraby not for vite
//const root = ReactDom.createRoot(document.getElementById('root')); 
//here ReactDom is the virtual dom created by react and createRoot is the method inside that dom
