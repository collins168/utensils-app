import { useCart } from "react-use-cart"

export default function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
  }=useCart()
  if (isEmpty) return <p className="text-center text-xl mt-4">Your cart is empty</p>
  return (
    <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">{totalUniqueItems}</h1>
        <div  className="text-center mb-4">
          <p className="text-lg font-semibold">Grand total:{cartTotal}</p>
        </div>
        <ul className="space-y-4">
          {items.map((item)=>(
            <li key={item.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center">
                <img src={item.img}  alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4 mb-4 md:mb-0" />
                <div className="flex-grow text-center md:text-left">
                  <section className="text-lg font-medium">{item.name}</section>
                  <section className="text-md font-medium">price:ksh{item.price}/=</section>
                  <section className="text-sm font-medium">Quantity:{item.quantity}</section>
                  <section className="text-lg font-semibold">
                   <p className="font-semibold">
                    Total:{item.price* item.quantity} </p>
                  </section>
                </div >
              <div className="flex space-x-2 mt-4 md:mt-0">
                <button onClick={()=>updateItemQuantity(item.id, item.quantity+1)} className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add</button>
                <button onClick={()=>updateItemQuantity(item.id, item.quantity-1)} className={item.id ===0 ?"cursor-not-allowed px-2 py-1 bg-green-500 text-white rounded-md hover:bg-yellow-600" : "px-2 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-60"} disabled={item.quantity==1}>Reduce</button>
                <button onClick={()=>removeItem(item.id)} className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">Cancle</button>
              </div>
            </li>
          ))
          }
        </ul>
    </div>
  )
}
