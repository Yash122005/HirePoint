import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className='bg-gray-900 text-gray-300 py-12 mt-20'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
                    <div>
                        <h3 className='text-white text-lg font-bold mb-4'>HirePoint</h3>
                        <p className='text-sm'>Connecting talent with opportunity</p>
                    </div>
                    <div>
                        <h4 className='text-white font-semibold mb-4'>Links</h4>
                        <ul className='space-y-2 text-sm'>
                            <li><a href='#' className='hover:text-white transition'>Home</a></li>
                            <li><a href='#' className='hover:text-white transition'>About</a></li>
                            <li><a href='#' className='hover:text-white transition'>Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-white font-semibold mb-4'>Follow Us</h4>
                        <ul className='space-y-2 text-sm'>
                            <li><a href='https://github.com' target='_blank' rel='noopener noreferrer' className='hover:text-white transition'>GitHub</a></li>
                            <li><a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='hover:text-white transition'>LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className='border-t border-gray-700 pt-8 text-center text-sm'>
                    <p>Made with ❤️ by Yash Gupta</p>
                    <p className='mt-2'>&copy; 2024 HirePoint. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer