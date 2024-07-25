import{ FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp }from"react-icons/fa"
export default function Footer() {
    const items=[
        {
            name:"Facebook",
            icon:FaFacebook,
            link:"#"
        },
        {
            name:"Instagram",
            icon:FaInstagram,
            link:"#"
        },
        {
            name:"whatsapp",
            icon:FaWhatsapp,
            link:"#"
        },
        {
            name:"Telegram",
            icon:FaTelegram,
            link:"#"
        },
        {
            name:"Twitter",
            icon:FaTwitter,
            link:"#"
        },
    ]
  return (
    <div className="bg-gray-800 text-white py-4  mt-4 border-[2px] rounded-lg max-auto">
        <div className="text-center text-gray-400">
        <p>For more information</p>
        </div>
        <div className="flex flex-col items-center space-y-4 mt-4">
           <div className="flex space-x-4">
           {
                items.map((item)=>(
                    <a key={item.name} href={item.link}  className="text-white hover:text-gray-400">
                        <item.icon className="h-6 w-6" />
                    </a>
                ))
            }
           </div>
        </div>
        <div className="text-center text-gray-400 mt-4">
            <p>&copy; {new Date().getFullYear()} Created by collins</p>
        </div>
    </div>
  )
}



