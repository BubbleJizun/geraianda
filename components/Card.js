import Link from "next/link";

export default function CardKategori(props) {

    return(
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:grid-cols-2 sm:gap-6 md:gap-5 w-full">
            {props.kategori.map((data) => (
                <Link href={data.link} key={data.id}>    
                    <div className="flex flex-col justify-end items-center w-full h-[264px] pb-5 space-y-3 md:pb-8 md:h-[370px] bg-[#f5edef] rounded-xl group">
                        <div className="relative  w-full h-full">
                            <img src={data.img} alt="bucket-snack" className="absolute top-6 md:top-0 ml-auto mr-auto right-0 left-0 w-[270px] group-hover:scale-110 z-0 transition-transform duration-300"></img>
                        </div>
                        <div>
                            <h1 className="font-bold md:text-2xl">{data.nama}</h1>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export function Card(props) {
    return(
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-5 gap-3 w-full">
                {props.data.map((data) => (
                        <Link href={`/products/${data.id}`} key={data.id} >
                        <div style={{ backgroundImage: `url(${data.img})` }} className={`flex items-end w-full h-[290px] md:h-[410px] rounded-xl bg-cover bg-top group overflow-hidden`}>
                                <div className="w-full h-[36%] space-y-1 md:space-y-2 text-left md:text-2xl text-[#f5e5f5] p-3 pr-4 py-2 md:px-5 md:py-3 bg-[#7e657e] ">
                                    <h1 className="h-11 md:h-16 w-full font-bold leading-5 md:leading-8 ">{data.nama} </h1>
                                    <p className="font-sansPro font-bold text-sm md:text-lg text-[#e9d0e9]">Rp. {data.harga},00</p>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </>
        
    )
}

export function TestimoniCard(props) {
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
            <div className="space-y-8 text-center bg-[#f5edef] px-4 py-8 rounded-xl">
                <p className="font-sansPro">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <h1 className="font-semibold">Muhammad Ajiz Alfarizi</h1>
            </div>
            <div className="space-y-8 text-center bg-[#f5edef] px-4 py-8 rounded-xl">
                <p className="font-sansPro">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h1 className="font-semibold">Aliya Nabila</h1>
            </div>
            <div className="space-y-8 text-center bg-[#f5edef] px-4 py-8 rounded-xl">
                <p className="font-sansPro">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h1 className="font-semibold">Yunita Anisa</h1>
            </div>
            
        </div>
    )
}