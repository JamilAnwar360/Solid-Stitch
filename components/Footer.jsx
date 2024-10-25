import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faTruck, faShieldAlt } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_2fr_2fr] gap-14 my-10 mt-20 text-sm'>
    <div>
    <Link to={'/'}><img src={assets.logo} className= 'mb-5 w-32' alt="" /></Link>
     <p className= 'w-full md:w-2/3  text-gray-600'> 
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto autem ipsum libero ducimus officia quas odit corrupti saepe explicabo! Quo ab a, quod ipsum porro officiis fugiat sit vero eum.
     </p>
        </div>
    <div>
    <p className='text-xl font-medium mb-5'>COMPANY</p>
    <ul className='flex flex-col gap-1 text-gray-700'>
      <li className='flex items-center'><FontAwesomeIcon icon={faHome} className="mr-2" />Home</li>
      <li className='flex items-center'><FontAwesomeIcon icon={faInfoCircle} className="mr-2" />About us</li>
      <li className='flex items-center'><FontAwesomeIcon icon={faTruck} className="mr-2" />Delivery</li>
      <li className='flex items-center'><FontAwesomeIcon icon={faShieldAlt} className="mr-2" />Privacy policy</li>
    </ul>
        </div>
    <div>
  <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
  <ul className='flex flex-col gap-1 text-gray-700'>
    <li className='flex items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="20" height="20" fill="currentColor" stroke="#ffa1b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>      
    <a href="tel:03072036123">+92-3072036123</a>
    </li>
    <li className='flex items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" className="mr-2"><path fill="currentColor" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg>
      <a href="mailto:contact@solidstitch.com" target="_blank">contact@solidstitch.com</a>
    </li>
    <li className='flex items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20" className="mr-2"><path fill="currentColor"d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
    <a href="mailto:contact@solidstitch.comhttps://www.instagram.com/solidstitch.om/" target="_blank">@solidstitch</a>
    </li>
        <li className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20" className="mr-2"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h137.2V327.7h-60V256h60v-54.6c0-59.2 35.2-91.4 88.6-91.4 25.6 0 52.4 4.6 52.4 4.6v57.6h-29.5c-29.1 0-38.1 18.1-38.1 36.7V256h65.4l-10.4 71.7h-55V480H400c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"/></svg>
    <a href="mailto:contact@solidstitch.comhttps://www.instagram.com/solidstitch.om/" target="_blank">@solidstitch</a>
    </li>
  </ul>
        </div>
    </div>
      <div className='mt-10 border-t border-white pt-6'>
        <p className='text-center text-gray-700 text-sm'>
          &copy; 2024 Solid Stitch. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
