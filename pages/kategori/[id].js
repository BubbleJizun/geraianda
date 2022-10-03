import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Card } from "../../components/Card";
import NavigationBar from "../../components/NavigationBar";
import { products } from "../../data/data.product";

export default function KategoriId(props) {

    const router = useRouter()
    let id = router.query['id']
    let kategori = products.filter(product => {
        for(let i = 0; i < product.kategori.length; i++) {
            return product.kategori[i].nama === id 
        }
    })
    

    return(
        <>
            <Head>
                <title>Bucket {id} - Geraianda</title>
            </Head>
            <div className="relative px-4 md:px-8">
                <NavigationBar />

                <main className="space-y-6 md:space-y-10 pb-6 md:pb-20">
                    <header style={{ backgroundImage: `url(/img/banner/background.jpg)` }} id="home" className=" flex justify-center items-center my-1 aspect-[4/3] md:w-full md:h-banner rounded-3xl bg-cover bg-center z-0">
                        <span className="absolute flex flex-col justify-center space-y-1 md:space-y-3 items-center z-[3]">
                            <h1 className="text-3xl md:text-5xl font-bold">Geraianda</h1>
                            <p className="text-lg md:text-2xl">Bucket {id}</p>
                        </span>
                        <span className="w-full h-full bg-white opacity-40 z-0"></span>
                    </header>

                    <div className="container md:px-16 space-y-10 text-center md:text-right">
                        <Card data={kategori} />
                    </div>
                </main>

            </div>
        </>
    )
}