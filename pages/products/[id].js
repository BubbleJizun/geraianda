import Head from "next/head";
import NavigationBar from "../../components/NavigationBar";
import { useRouter } from "next/router";
import { products } from "../../data/data.product";


export default function ProductId(params) {

    const router = useRouter()
    let id = parseInt(router.query['id'])

    let data = products.filter(product => {
        return product.id === id
    })


    return(
        <>
            <Head>
                <title>Detail Bucket</title>
            </Head>

            <div className="relative px-4 md:px-8">
                <NavigationBar />
                <div>
                    {data.map(data => (
                        <main key={data.id} className="w-full lg:grid lg:grid-cols-product lg:gap-4 px-2 space-y-6 py-4">
                            <div style={{ backgroundImage: `url(${data.img})`}} className=" bg-black rounded-3xl aspect-square md:aspect-video bg-cover bg-center"></div>
                            <div className="space-y-16 px-4">
                                <div className="space-y-1 md:space-y-4">
                                    <h1 className="text-3xl md:text-4xl font-bold">{data.nama}</h1>
                                    <h1 className="text-xl font-bold font-sansPro">Rp. {data.harga},00</h1>
                                    <p className="font-sansPro py-1">{data.desc}</p>
                                </div>
                                <button className="w-full py-[10px] text-2xl font-sansPro font-bold bg-emerald-600 text-white rounded-full">
                                    <h1 className="text-center ">Pesan</h1>
                                </button>
                            </div>
                        </main>
                    ))}
                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}