import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

export default function About() {

    return(
        <div className="relative px-4 md:px-8">
            <NavigationBar />
            <header style={{ backgroundImage: `url(/img/banner/why.png)` }} id="home" className="md:hidden flex justify-center items-center my-1 aspect-[4/3] md:h-banner rounded-3xl bg-cover bg-center z-0">
                <span className="absolute flex flex-col justify-center md:space-y-3 items-center z-[3]">
                    
                </span>
            </header>
            <main className="container md:grid md:grid-cols-2 md:py-6 md:gap-3">

                <div style={{ backgroundImage: `url(/img/banner/why.png)` }} className=" hidden md:block aspect-[4/3] bg-cover bg-center rounded-xl">
                </div>
                <div className="space-y-4 text-justify px-4 py-10">

                    <h1 className="text-3xl font-bold">Tentang Kami</h1>
                    <p className="font-sansPro">Geraianda ialah fresh bucket yang siap membantu dan melayani pesanan
                        buket dengan berbagai banyak varian mulai dari buket bunga dengan isi snack,
                        buket bunga dengan isi snack, buket bunga dengan isi boneka, dan uang.
                        Sangat cocok digunakan untuk momen hari spesialmu bersama pasangan dan
                        orang yang tersayang.</p>
                    <p className="font-sansPro">“when words fail, flowers speak” yang mempunyai arti ketika kata-kata gagal
                        maka bunga yang berbicara.</p>
                    <p className="font-sansPro"> Percayakan pesanan buket anda kepada kami agar
                        hadiah yang anda kirimkan kepada si penerima tidak salah makna dan pastinya
                        akan memberikan kesan yang tepat disertai rangkaian bunga yang indah. Kami
                        akan selalu memperhatikan kualitas dan kepuasan konsumen.</p>
                </div>
            </main>
            
            
        </div>
    )
}