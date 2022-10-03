import Link from "next/link";
import { useState } from "react";
import { menus } from "../data/data.menu";

export default function NavigationBar(props) {

    const [menuBtn, setMenu] = useState(true)

    
    const handleMenuClick = () => {
        setMenu(!menuBtn)
    }
    

    return(
        <>
            <nav className="sticky top-0 z-10 bg-white">
                <div className="sticky top-0 left-0 container flex items-center h-[68px] px-8 py-2 md:h-[72px] bg-white z-10">
                    <div className="relative flex justify-center items-center w-full h-full md:justify-between z-10">
                        <span className="md:w-[300px] font-bold text-[26px]">Geraianda</span>
                        <div className="space-x-4 font-medium hidden md:block">
                            {menus.map((menu) => (
                                <Link href={menu.to} key={menu.label}>
                                    <button>{menu.label}</button>
                                </Link>
                            ))}
                        </div>
                        <div className="w-[300px] hidden space-x-2 lg:flex justify-end items-center">
                            <input type='text' placeholder="Ketikan sesuatu untuk mencari..." className={`border w-[80%] border-black px-2 py-1 font-sansPro focus:outline-none`}></input>
                            <button className="material-symbols-outlined px-3 py-1 border border-black bg-black text-white">
                                search
                            </button>
                        
                        </div>

                        <button onClick={() => handleMenuClick()}
                        className={`absolute right-0 h-10 md:hidden ${menuBtn ? 'space-y-1':'mt-3'} transition-all duration-500`}>
                            <div className={`${menuBtn ? 'w-7' : '-my-1 w-6 rounded-full' } h-[3.8px] bg-black transition-all duration-500`}></div>
                            <div className={`${menuBtn ? 'w-7' : ' w-6 rounded-full' } h-[3.8px] bg-black transition-all duration-500`}></div>
                            <div className={`${menuBtn ? 'w-7' : '-my-1 w-6 rounded-full' } h-[3.8px] bg-black transition-all duration-500`}></div>
                        </button>


                    </div>
                </div>
                <div className={`fixed w-full h-screen px-10 py-3 space-y-6 bg-white left-0 right-0 ${menuBtn ? '-top-full' : 'top-[62px]'} z-0 menu transition-all ease-in-out duration-500`}>
                    <div className="w-full space-x-2 flex items-center">
                        <input type='text' placeholder="Ketikan sesuatu untuk mencari..." className={`border w-[80%] border-black px-2 py-2 font-sansPro focus:outline-none`}></input>
                        <button
                            className="material-symbols-outlined w-[20%] py-2 border border-black bg-black text-white">
                            search
                        </button>
                    </div>

                    <div className="w-full space-y-4">
                        {menus.map(menu => (
                            <Link href={menu.to} key={menu.label} >
                                <button onClick={() => setMenu(!menuBtn)} className="flex text-xl font-bold">{menu.label}</button>
                            </Link>
                        ))}
                    </div>

                    <hr className="border-b-black border-b-2"></hr>

                    <div className="space-y-4">
                        <h1 className="text-xl font-bold">Tokopedia</h1>
                        <h1 className="text-xl font-bold">Shopee</h1>
                    </div>
                </div>
            </nav>

        </>
                    
    )
}