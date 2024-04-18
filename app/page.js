  "use client"
  import React, { useState } from 'react'

const page = () => {
  const [title, settitle]= useState("")
  const [desc, setdesc] = useState("")
  const [MainTask, setMainTask] = useState([])
  const submitHandler= (e)=>{
    e.preventDefault()
    setMainTask([...MainTask,{title , desc}])
    settitle("")
    setdesc("")
    console.log(MainTask)
  }
const deleteHandler = (i) =>{
let copytask = [...MainTask]
copytask.splice(i,1)
setMainTask(copytask)
}


  let renderTask = <h2>No Task Available</h2>

if(MainTask.length>0){ 
renderTask = MainTask.map((t, i) => {
  return(
    <li key={i} className='flex item-center justify-between mb-5'>
    <div className='flex item-center justify-between w-2/3'>
    <h5 className='text-2xl font-semibold'>{t.title}</h5>
    <h6 className='text-lg font-mediumbold'>{t.desc}</h6>
    </div>
    <button
    onClick={() => {
      deleteHandler(i)
    }}
    className='bg-red-600 text-white rounded font-bold p-1'>Delete</button>
    </li>
   );
    });
  }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl 
    font-bold text-center font-mono	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    '>My Todo List</h1>
    <form onSubmit={submitHandler}>
    <input 
    type='text' className='text-2xl border-zinc-900 border-4 m-8 px-4 py-2' 
    placeholder='Enter Title Here'
    value={title}
    onChange={(e)=>{settitle(e.target.value)}}
    />

    <input
     type='text' className='text-2xl border-zinc-900 border-4 m-8 px-4 py-2' 
     placeholder='Enter Description Here'
    value={desc}
    onChange={(e)=>{setdesc(e.target.value)}}
    />
   
   <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'> Add Task</button>
    </form>
    
    <hr/>
    <div className='p-7 bg-gray-400'>

      <ul>
        {renderTask}
      </ul>
    </div>

    </>
  )
}

export default page