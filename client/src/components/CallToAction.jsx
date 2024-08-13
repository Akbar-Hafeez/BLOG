import { Button } from 'flowbite-react';
import { Link} from 'react-router-dom';
import image from '../public/logo.png'
export default function CallToAction() {
    
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about Zyck Hereos?
            </h2>
           
           <Link  to={'/about'} className='flex justify-center'  > <Button  gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none my-6'>
               
                   About Us
               
            </Button> </Link>
        </div>
        <div className="p-7 flex flex-1 justify-center items-center">
            <img src={image} className='w-[300px] '/>
        </div>
    </div>
  )
}