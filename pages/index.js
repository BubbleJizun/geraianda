import Head from "next/head";
import NavigationBar from "../components/NavigationBar";
import Image from "next/image"
import { kategoris } from "../data/data.kategori";
import CardKategori, { Card, TestimoniCard } from "../components/Card";
import { products } from "../data/data.product";
import Footer from "../components/Footer";


export default function Home() {

  let newProducts = products.filter(product => {
    return product.baru === true
  })
  .slice(0,4)

  return (
    <>
      <Head>
        <title>Geraianda - Bucket Palembang</title>
      </Head>
      
      <div className="relative ">
        <NavigationBar />

        <div className="space-y-28 px-4 md:px-8">
          <header style={{backgroundImage: `url(/img/banner/img-3.jpg)`}} id="home" className="banner flex justify-center items-center my-1 w-full h-banner-sm md:h-banner rounded-2xl bg-cover bg-center overflow-hidden border z-0">
            <span className="absolute opacity-0 animate-zoom-logo z-[2]">
              <Image src="/img/logo/logo-geraianda.png" alt="logo-geraianda" width={172} height={204}></Image>
            </span>
            <span className="w-full h-full bg-white opacity-30"></span>
          </header>

          <main className="container max-w-6xl space-y-24 overflow-hidden">
            <div className="space-y-10">
              <div className="space-y-1 md:space-y-3 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold">Sesuai Kategori</h1>
                <p className="text-sm md:text-lg">Pilih bucket sesuai Kategori yang dia suka</p>
              </div>

              <CardKategori kategori={kategoris} />

            </div>

            <div className="flex flex-col items-center md:block text-right space-y-10">
              <div className="space-y-1 md:space-y-3 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold">Paling Baru</h1>
                <p className="text-sm md:text-lg">Bucket terbaru pilihan pelanggan</p>
              </div>
            
              <Card data={newProducts} />
              
            </div>

            <div className="space-y-10">
              <div className="space-y-1 md:space-y-3 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold">Testimoni</h1>
                <p className="text-sm md:text-lg">Ungkapan hati dari pelanggan</p>
              </div>
              <div className="">
                <TestimoniCard />
              </div>
            </div>

          </main>
        </div>
        
        <Footer />
        
      </div>


      
    </>
  )
}

