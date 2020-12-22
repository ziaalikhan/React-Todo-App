import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './config/firebase'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: [{ title: '',edit: false}, {title: '',edit: false}],
      value: ' ',
     
    }
  }

  add_todo = () => {
    let obj ={title: this.state.value}
    
    firebase.database().ref('/').child('todos').push(obj)

    this.setState({
      todos: [...this.state.todos, obj],
      value : ''
    })
  }

  delete_todo = (index)=>{
   this.state.todos.splice(index, 1);
   this.setState({
     todos: this.state.todos
   })
  }

  edit_todo = (index,val) => {
    this.state.todos[index].edit = true;

    this.setState({
      todos: this.state.todos 
    })
  }
  handleChange = (e,index)=>{
    this.state.todos[index].title = e.target.value;
    this.setState({
      todos: this.state.todos
    })
  }

  update = (index) => {
    this.state.todos[index].edit = false;

    this.setState({
      todos: this.state.todos 
    })
  }


  render() {
    let { todos, value }= this.state;
    return(
      
      <div className='main_cont'>
        <div className='cont'>
          <h1>React TodoApp</h1><hr/>
        </div>

         <form>  
        <div className="form-group">
        <input 
   value={value} onChange={(e)=> this.setState({value: e.target.value})} type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Your Value" />
        </div>
      </form>

      <div id='btn_cen'>
        <button onClick={this.add_todo} type="button" class="btn btn-dark">Add Item</button>
        
        </div>

          <div>
          <ul>
            {todos.map((v,i)=>{
              return <li key={i}>{v.edit ? <input value={v.title} type='text' onChange={(e)=>this.handleChange(e,i)}/> : v.title}
              
              {v.edit ?
              
              <button onClick={()=> this.update(i)} type="button" class="btn btn-dark">Update</button>
               :
               <button onClick={()=>this.edit_todo(i,v.title)}  type="button" class="btn btn-dark">Edit</button>
               }
              <button onClick={()=>this.delete_todo(i)}  type="button" class="btn btn-dark">Delete Item</button>
              
              </li>

            })}
          </ul>
          </div>
      </div>
    )
  }
}



export default App;
