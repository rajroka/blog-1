import React from 'react'
import Image from 'next/image'

const Footer = () => {

    return (
        
        <footer className='flex min-h-10 bg-black text-white'>
          
        <div className='m-4'>
            <Image 
            src="/pokhara.jpeg"
            alt="/"
            height={100}
            width={100}/>
            <div><p>lazor</p>
            <hr className='w-full h-1'/>
            <div>
                <input type="text" placeholder='Enter you email' /></div> hello</div>
            </div>  
        </footer>

    )
}

export default Footer
