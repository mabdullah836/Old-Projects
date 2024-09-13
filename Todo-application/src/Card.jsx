// import React, { useRef, useState } from 'react'

// const Card = ({ title, deleteTodo, editTodo, index }) => {
//     const [showTodo, setShowTodo] = useState(true);
//     const editedValue = useRef();

//     const saveEditTodo = () => {
//         editTodo(index, editedValue.current.value)
//         setShowTodo(true)
//     }
//     return (

//     <div className='flex justify-center mt-10'>
//         <div className="card w-5/12 bg-slate-800 shadow-xl  "    >
//             {showTodo ? <div className='flex justify-between  ' >
//                 <h1 className="p-5 text-lg">{title}</h1>
//                 <div>
//                     <button className='btn btn-outline btn-info  mt-2' onClick={() => setShowTodo(false)}>Edit</button> 
//                     <button className='btn btn-outline btn-error  mt-2  ml-3' onClick={() => deleteTodo(index)}>Delete</button>
//                     </div>
//             </div> : <div className="flex">
//             <input type="text" ref={editedValue} placeholder=" Update Todo" className="input input-bordered input-info w-full max-w-xs" />

//                 <button className='btn btn-outline btn-warning ml-3' onClick={saveEditTodo}>save</button>
//             </div>}
//         </div>
//      </div>
//     )
// }


// export default Card

