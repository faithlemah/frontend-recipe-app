import React from 'react'
import login from './login.css'
function App(){
return <Frame4>Username or Email</Frame4>;
}
export default App;
function Frame4(props) {
  const { children } = props;
  return(
    
    <div className='frame-4'>
      <div className='username-or-email inter medium-black-16px'>
        <span className='inter-medium-black-16px'>
        {children}</span>
      </div>
    </div>
  )
}
