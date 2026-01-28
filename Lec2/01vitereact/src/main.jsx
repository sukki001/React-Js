import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return (
    <div>
      <h1>Custom app | Sukki</h1>
    </div>
  )
}


// const ReactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : "_blank"
//     },
//     children : 'Click me to visit Google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'> Visite Google</a>
)


const ReactElement = React.createElement(
  'a',
  {href: "https://google.com" , target: "_blank"},
  'click me to visit google',
  anotherElement
)

createRoot(document.getElementById('root')).render(
    // <MyApp />
    // MyApp()
    <>
    <App/>
    {ReactElement}
    </>
    // anotherElement
)
