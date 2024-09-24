import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
        <header className='shadow sticky px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-xl'>your logo</h2>
            </div>
            <div className='order-2 flex gap-4 text-xl items-center font-bold'>
              <div className='border border-black rounded-lg px-6 py-2'>
                <button>Login</button>
              </div>
              <div className='border bg-orange-500 rounded-lg px-6 py-2'>
                <button>SignUp</button>
              </div>
            </div>
            <div>
              <ul className='flex items-center gap-8 text-xl'>
                <li>
                    <NavLink
                      to="/"
                      className={({isActive}) => 
                          `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                      }
                    >
                      Home
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to="/about"
                    className={({isActive}) => 
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({isActive}) => 
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/github"
                    className={({isActive}) => 
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Github
                  </NavLink>
                </li>
                
              </ul>
            </div>
          </div>
        </header>
    </>
  )
}

export default Header