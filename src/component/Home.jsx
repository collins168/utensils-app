import{ useCart } from"react-use-cart"
export default function Home() {
  const product=[
    {
      name:"Thermos Flask ",
      id:1,
      quantity:1,
      discription:"1.8 litre ",
      price: 700,
      img:"https://kamukunji.co.ke/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-17-at-08.23.38_d02013bf.jpg"
    },
    {
      name:"Vacuum Thermos Flask",
      id:2,
      quantity:1,
      discription:"3.5 litre",
      price:1600,
      img:"https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/50/341354/1.jpg?1582"
    },
    {
      name:"Ml Thermos Flask",
      id:3,
      quantity:1,
      discription:"500ml",
      price:650,
      img:"https://static-01.daraz.com.bd/p/49344864f8d624f9264dd14203457dd1.jpg_750x750.jpg_.webp"
    },
    {
      name:"Thermos Stainless King Food Jar",
      id:4,
      quantity:1,
      discription:"470ml",
      price:5250,
      img:"https://www.thespruceeats.com/thmb/vXkzohZQJXETC0FzC7uh2mZ55r4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Thermos_HotFoodThermos_King_03-8b6b63e5ea8e4fddb8b9c7eedae304c8.jpg"
    },
    {
      name:"Espresso Cups",
      id:5,
      quantity:1,
      discription:"DO-35 A.D. 3.5 oz Case 1 Dozen Bright White Cup Mug",
      price: 2400,
      img:"https://i.ebayimg.com/images/g/r9sAAOSwsRxjeGIV/s-l1200.jpg"
    },
    {
      name:"Royal Albert Tea Cup",
      id:6,
      quantity:1,
      discription:" set of 5 - teacups and saucers",
      price:4000,
      img:"https://i.etsystatic.com/36888782/r/il/91e2f9/4047031318/il_fullxfull.4047031318_5vef.jpg"
    },
    {
      name:"crystal wine glasses",
      id:7,
      quantity:1,
      discription:"H: 15cm (5.9) Di: 7cm (2.8),  5pc Set (Made in Germany) ",
      price:9200,
      img:"https://www.thevintageentertainer.com/upload/images/shopprod/11247/a-dozen-equisite-edwardian-crystal-wine-glasses_11247_main_size3.jpg"
    },
    {
      name:"Mabati Cup",
      id:8,
      quantity:1,
      discription:" 12 Piece per set",
      price:400,
      img:"https://images.yaoota.com/F62ZpICShmgq-U7SNnqcOkuIeHQ=/trim/fit-in/840x840/filters:quality(100)/yaootaweb-production-ke/media/crawledproductimages/96a2b85b76479bd1251c291e2ec8ed47789a5c06.jpg"
    },
    {
      name:"Tea spoon",
      id:9,
      quantity:1,
      discription:"Set of 36 per dozen ",
      price:2000,
      img:"https://i.ebayimg.com/images/g/X8QAAOSw6QpbRjdn/s-l1200.webp"
    },
    {
      name:"Table spoon(Stainless Steel)",
      id:10,
      quantity:1,
      discription:"Dinner Spoon Set,16 Pcs 7.3",
      price:3000,
      img:"https://m.media-amazon.com/images/I/719CjV9WlJL._UX250_.jpg"
    },
    {
      name:"serving spoon",
      id:11,
      quantity:1,
      discription:"6 pcs stainless steel serving spoon cutlery set with stand Silver",
      price:1800,
      img:"https://kenglautensils.co.ke/wp-content/uploads/2021/02/IMG-20210217-WA0008.jpg"
    },
    {
      name:"Fork",
      id:12,
      quantity:1,
      discription:"Stainless Steel Dampier Dinner Fork 1-Dozen 12pcs",
      price:1400,
      img:"https://i.ebayimg.com/images/g/dF4AAOSwv~Fio2jX/s-l1200.webp"
    },
    {
      name:"Dinner Plates",
      id:13,
      quantity:1,
      discription:"Dinner Plates Ceramics Dozen (12pcs)",
      price:4000,
      img:"https://kibubuapp.com/uploads/all/QLw1jlW53ToSTm8HxlDeOtq2a1VT6H0htFWvRDew.jpg"
    },
    {
      name:"Paper Plates",
      id:14,
      quantity:1,
      discription:"50pcs Compostable Paper Plates Set, Biodegradable Plates Heavy-Duty Paper Plates Cutlery",
      price:2000,
      img:"https://gezondstore.com/cdn/shop/products/01_a72b7f57-89b5-4e4d-b34b-e8e9380a8a44.jpg?v=1658462507"
    },
    {
      name:"Plastic Plates",
      id:15,
      quantity:1,
      discription:"Colorful Disposable Plastic Plates - Set of 60 Heavy Duty Dinner and Dessert Plates for Parties - 30 Dinner Plates 10.25 and 30 Dessert Plates 7.5",
      price:6000,
      img:"https://m.media-amazon.com/images/I/71cwa0rZqbL._AC_SL1500_.jpg"
    },
    {
      name:"Bowls ",
      id:16,
      quantity:1,
      discription:"6inch Ceramic Soup Bowls 6pcs Set",
      price:2700,
      img:"https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/64/4397651/1.jpg?1383"
    },
    {
      name:"Hotpots",
      id:17,
      quantity:1,
      discription:"Signature 4 Pcs Tall Boy StainlessSteel Hotpots-1000/2000/3000/5000L",
      price:4450,
      img:"https://gadgetshome.co.ke/wp-content/uploads/2022/02/1-35.jpg"
    },
    {
      name:"KETTLE",
      id:18,
      quantity:1,
      discription:"Premier 4.5 LITRES ELECTRIC KETTLE",
      price:4500,
      img:"https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/45/3110761/1.jpg?0566"
    },
    {
      name:" Sufuria ",
      id:19,
      quantity:1,
      discription:"Narcol Chui Sufuria 12/19 8pcs Set H",
      price:3000,
      img:"https://erp.copiaglobal.com/web/image/product.product/3048/image"
    },
    {
      name:"Plastic Tea Strainer",
      id:20,
      quantity:1,
      discription:"Vedant Metalic Kitchen Plastic Mesh Tea Strainer, Size: 21.5 X 10cm ",
      price:150,
      img:"https://5.imimg.com/data5/SELLER/Default/2021/10/IM/XM/DP/83356493/5-no-opek-strainer-2-net-1000x1000.jpg"
    },
  ]
  const{addItem, inCart}=useCart()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 mx-5 md:mx-0 md:mt-5 text-center pl-1 pr-1">
       {
        product.map((item)=>(
          <div key={item.id} className="bg-black bg-opacity-85 max-w-[400px] rounded-lg">
            <section className="px-1 pt-1">
              <img src={item.img}alt="" className="w-full h-52 hover:object-contain object-cover rounded-t-lg cursor-pointer"/>
            </section>
            <section className="text-blue-400 text-center font-bold text-xl uppercase underlin"> <hr/>
              {item.name}
            </section>
            <section className="text-center text-slate-300">
              {item.discription}
            </section>
            <section className="text-blue-500">
             <p>KShs: {item.price}.00 /=</p>
            {
              inCart(item.id)?
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-150 ease-in-out cursor-not-allowed" onClick={()=>addItem(item)} disabled={inCart(item.id)}>Add to cart</button>
              :
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-150 ease-in-out"onClick={()=>addItem(item)}>Add to cart </button>
            }
            </section>
          </div>
        ))
       }
    </div>
  )
}
