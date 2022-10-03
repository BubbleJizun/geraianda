import Head from "next/head";
import { useState } from "react";
import { Card } from "../../components/Card";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import { products } from "../../data/data.product";

export default function Product() {

    const [more, setMore] = useState(8)

    let data = products.slice(0, more)

    return (
        <>
            <>
                <Head>
                    <title>Bucket Palembang - Geraianda</title>
                </Head>
                <div className="relative ">
                    <NavigationBar />

                    <main className="px-4 md:px-8 space-y-6 md:space-y-10 pb-6 md:pb-20">
                        <header style={{ backgroundImage: `url(/img/banner/background.jpg)` }} id="home" className="flex justify-center items-center my-1 aspect-[4/3] md:w-full md:h-banner rounded-3xl bg-cover bg-center z-0">
                            <span className="absolute flex flex-col justify-center md:space-y-3 items-center z-[3]">
                                <h1 className="text-3xl md:text-5xl font-bold">Geraianda</h1>
                                <p className="md:text-2xl">Give Your Love</p>
                            </span>
                            <span className="w-full h-full bg-white opacity-40 z-0"></span>
                        </header>

                        <div className="container md:px-16 space-y-10 text-center md:text-right">
                            <Card data={data} />
                            {data.length !== products.length && (
                                <button onClick={() => setMore(more + more)}
                                className="font-semibold underline">Tampil lebih banyak lagi</button>
                               
                            )}
                            
                        </div>
                    </main>
                    {data.length === products.length && (
                        <Footer />
                    )}

                </div>
            </>
        </>
    )
}