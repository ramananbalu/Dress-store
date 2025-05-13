import React from 'react'
import logo from '../assets/frontend_assets/logo.png'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div >
                <img src={logo} className='mb-5 w-32' alt='' />
                <p className='w-full md:w-2/3 text-gray-600'>
                Your one-stop destination for books that inspire, entertain, and educate. Discover stories that stay with you, only at [Your Store Name].
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 9876554321</li>
                    <li>Contact@forjn.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'> Copyright 2025 @ company name - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer