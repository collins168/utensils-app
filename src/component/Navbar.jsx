import { useState } from "react"
import{ NavLink, useLocation }from "react-router-dom"
import{ FaBars, FaCarAlt, FaCat, FaTimes }from"react-icons/fa"
export default function Navbar() {
    const menu=[
        {
            name:'Home',
            path:"*",
        },
        {
            name:'Cart',
            path:"/cart",
        }
    ]
    const location=useLocation()
    const[isOpen, setIsOpen]=useState(false)
    const menu_button=()=>{
        setIsOpen(! isOpen)
    }
  return (
    <div className="bg-black p-6 text-white uppercase sticky top-0">
        <div className="flex">
            <section>
           <p className="text-3xl font-bold text-white uppercase cursor-default hover:text-blue-700 hover:italic">Culinary Essentials</p>
            </section>
            <section className="md:flex mx-auto space-x-2 hidden">
                {
                menu.map((item)=>(
                    <div key={item.path}>
                       {
                        <NavLink to={item.path} className={`${location.pathname===item.path ?"underline text-blue-700 text-xl ":"text-gray-200 hover: italic hover:underline hover:text-blue-700"}`}>
                            {item.name}
                        </NavLink>
                       }
                    </div>
                ))
                
                }
            </section>
            <section className="text-white ml-auto block md:hidden uppercase">
                <button onClick={menu_button}>
                    {
                        isOpen?
                        <FaTimes size={24}/>
                        :
                        <FaBars size={24}/>
                    }
                </button>
            </section>
        </div>
        <section className="mt-4 md:hidden">
            {
                isOpen && (
                    <div className="grid">
                        {
                            menu.map((item)=>(
                                <NavLink
                                key={item.path}
                                to={item.path}
                                className={`${location.pathname===item.path ?"underline text-blue-700 text-xl ":"text-gray-200 hover: italic hover:underline hover:text-blue-700"}`} onClick={menu_button}
                                >
                                    {item.name}
                                </NavLink>
                            ))
                        }
                    </div>
                )
            }
        </section>
    </div>
  )
}
