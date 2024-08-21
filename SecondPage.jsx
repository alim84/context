import {useContext} from 'react';
import UserContext from '../context/UserContext';


const SecondPage = () => {
    let {name} = useContext(UserContext);
    return (
        <div className='flex w-[400px] h-[100px] bg-slate-100 mx-auto justify-center mt-5'>
            <div className='mt-6'>
            {name}
        </div>
       
        </div>
    );
};

export default SecondPage;