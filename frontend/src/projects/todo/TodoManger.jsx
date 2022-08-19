import React, { useEffect,useState } from 'react'
import Todos from './Todos'
import './css/style.css'
import axios from 'axios'
import { Link } from "react-router-dom";

const TodoManager = ()=> {
    
    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState([ {
                          id: 1,
                          title: 'take exam',
                          completed: false
                      },
                      {
                          id: 2,
                          title: 'prepare for exam',
                          completed: false
                      },
                      {
                          id: 3,
                          title: 'revisoion',
                          completed: false
                      },
                      {
                          id: 4,
                          title: 'code practice',
                          completed: true
                      },
                      {
                          id: 5,
                          title: 'download admit card',
                          completed: false
                      }
       ]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       const { data } = axios.get(
    //         "https://jsonplaceholder.com/todos?_limit=10"
    //       );
    //       setTodos([...todos, data]);
          
    //       //   axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //       //   .then((res) => this.setState({todos:res.data}));
        
    //     }
       
       
    // fetchData()
       
    // },[todos])

    const handleClick = (index) => {
      
        setTodos(todos.map(todo => {
            if (todo.id === index) {
                todo.completed = !todo.completed
            }
            return todo;
        })
        )
    }

      const handleDelete = (index) => {
        // axios.get(`https://jsonplaceholder.typicode.com/todos/${index}`)
        //     .then((res) => {
        //     this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==index)]})
        // })
        // console.log(e)
        setTodos(todos.filter((todo) => todo.id !== index));
        
    }
    
      const addTodoHandler = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed:false
        })
            .then((res) => {
            this.setState({todos:[...this.state.todos,res.data]})
        })
        const newTodo = {
            id: Math.floor(Math.random()*10),
            title,
            completed:false
        }
        setTodos([...todos,newTodo])
  }
    

        return (
          <>
            <Link to="/" className="btn btn-dark my-3 ">
              Back
            </Link>

            <Todos todos={todos} Click={handleClick} Delete={handleDelete} addTodo={addTodoHandler} />
          </>
        );
 
}

export default TodoManager
