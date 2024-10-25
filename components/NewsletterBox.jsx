import React from 'react'

const NewsletterBox = () => {

  const onSubmitHandler = (event) =>{ 
    event.preventDefault();
}

  return (
        <div className= 'mt-10 text-center pt-20'> 
        <p className= 'text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className= 'text-gray-700 mt-3'> 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <form onSubmit={onSubmitHandler} className= 'w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3'>
            <input className= 'rounded-full w-full sm:flex-1 outline-none' type="email" placeholder='  Enter your email' required />
            <button type= 'submit' className='rounded-full bg-black text-pink-300 text-xs px-10 py-4'>SUBSCRIBE</button>
            </form>
             
        </div>

  )
}

export default NewsletterBox
