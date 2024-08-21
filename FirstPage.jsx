import {useContext, useState} from 'react';
import UserContext from '../context/UserContext';

const FirstPage = () => {
    let {name, setName} = useContext(UserContext)
  
    let [update, setUpdate] =useState('');

    let handleInput=(e)=>{
        setUpdate(e.target.value);
    }

    let handleSend =()=>{
        setName(update)
    }
   
    return (
     <div className='flex w-[400px] h-[400px] bg-slate-100 mx-auto justify-center'>
           <div className='  py-4'>
            <level className=" mx-4">User ID</level>
           <input onChange={handleInput} className='border border-pink-100 block mx-4 ' type='text' placeholder='userID'></input>
          
           <button className='py-2 px-5 bg-gray-500 mt-5 rounded-xl  justify-center mx-4 ' onClick={handleSend}>Submit</button>
        </div>
     </div>
    );
};

export default FirstPage;