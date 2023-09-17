import React from 'react'

export default class Students extends React.Component{
   render()
   {
      console.log(this.props)
      return(
        <div style={{backgroundColor:'lightgreen', margin:25}}>
         <h2>Name: {this.props.name}</h2>
         </div>
     )
   }
}