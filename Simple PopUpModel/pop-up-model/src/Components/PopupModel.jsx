import React from 'react'
import { CircleX } from 'lucide-react';
import { Send } from 'lucide-react';
import { useRef } from 'react';

const PopupModel = ({onClose}) => {

    const closeModel = useRef()

    const closePopup = (event) => {
        // if (closeModel.current === event.target) {
        //     onClose();
        // }
        if (event.target === event.currentTarget) {
        onClose();
/*        
    Property                    Meaning
    event.target                Exact element clicked
    event.currentTarget         Element that has event listener
*/

    }
    }


  return (
    <>
        <div ref = {closeModel} onClick={closePopup} className='fixed inset-0 backdrop-blur-sm flex items-center justify-center'>
            <div className='mt-10 flex flex-col gap-5 text-white'>
                <button onClick = {onClose} className='place-self-end'><CircleX /></button>
                <div className='bg-indigo-500 rounded-2xl px-20 py-10 flex flex-col gap-5 items-center mx-4'>
                    <h1 className='text-4xl font-extrabold'>This is a Popup Model in React js </h1>
                    <form className='flex gap-4'>
                        <input
                            type="text"
                            placeholder='Enter your name'
                            required
                            className='w-full px-4 py-3 text-black rounded-2xl bg-white'
                        />
                        <input type="email"
                            placeholder='Enter your email'
                            required
                            className='w-full px-4 py-3 text-black rounded-2xl bg-white'
                        />
                        
                        <button className='bg-green-500 px-4 py-2 text-lg rounded-2xl shadow-2xl'> <Send /></button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default PopupModel