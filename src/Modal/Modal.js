import React from 'react'
import Modal from './Modal.css'



export default class Madal extends React.Component{
   state={
      isOpen:false
   }
   
   render(){
      return(
         <React.Fragment>
            <button onClick={()=>this.setState({isOpen:true})}>Open modal</button>
            
            {this.state.isOpen && (<div className='modal'>
               <div className='modal-body'>
                  <h1>Modal title</h1>
                  <p>I am awesome modal!</p>
                  <button onClick={()=>this.setState({isOpen:false})}>Close modal</button>
               </div>
            </div>)}
         </React.Fragment>
      )
   }
}