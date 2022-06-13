import './App.css';
import React from 'react';


class App extends React.Component {
 constructor(props){
   super(props);
   this.state={
     Person:{
      fullName:"Touir Marwa",
      bio:"I am a Customer Service",
      imgSrc : "/image.jpg",
      profession :"Full Stack js Student"
     },
     count :0,
     Show:false,
   }
 }
  componentDidMount(){
  setInterval(()=>this.setState({count:this.state.count+1}),1000)}
  render(){
     return(
       <div className='design'> 

      <button onClick={ () =>this.setState({Show : !this.state.Show, count : this.state.count = 0})} className='bouton'>{this.state.Show ? 'Hide' : 'Show'}</button>
      
      {this.state.Show &&

      <div>
      <img src={this.state.Person.imgSrc} alt='Not Found!' style={{width : "200px", height : "200px", borderRadius :"4px"}}/>
      <h1 style={{color:"darkbeige"}}>{this.state.Person.fullName}</h1>
      <h3>{this.state.Person.bio}</h3>
      <h3>{this.state.Person.profession}</h3>
      <h4>Time : {this.state.count}</h4> 
    </div> 
      }
    </div>
    )
    
  }
}
export default App;