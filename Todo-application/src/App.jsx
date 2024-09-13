// import React, { useRef, useState } from 'react'
// import Card from './Card';

// const App = () => {

//   const todoVal = useRef();
//   const [data, setData] = useState([]);

//   const addTodo = (event) => {
//     event.preventDefault();
//     data.push(todoVal.current.value);
//     setData([...data]);
//     todoVal.current.value = ''

//   }

//   const deleteTodo = (index) => {
//     data.splice(index, 1);
//     setData([...data]);
//   }

//   const editTodo = (index, value) => {
//     data.splice(index, 1, value);
//     setData([...data]);
//   }
//   return (
//     <>
//       <h1 className='text-center mt-5 text-5xl' >Todo Application</h1>
//       <div className="flex justify-center flex-col m-12">
//         <form className='flex justify-center' onSubmit={addTodo}>
//           <input type="text" ref={todoVal} placeholder="Enter Todo" className="input input-bordered input-info w-4/12 " />
//           <button className="btn btn-outline btn-info ml-5">Add Todo</button>

//         </form>
//         {data.length > 0 ? data.map((item, index) => {
//           return <Card key={index} title={item} deleteTodo={deleteTodo} editTodo={editTodo} index={index} />
//         }) : <h1 className="text-center mt-10">No Todo...</h1>}
//       </div>
//     </>
//   )
// }

// export default App

import React from 'react'
// import Quiz from './Quiz'
import QuizApp from './Quiz'

const App = () => {
  return (
    <div>
      <QuizApp/>
    </div>
  )
}

export default App