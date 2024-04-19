import Navbar from "@/components/ui/main-nav"
import { Hero } from "../components/landing/Hero"
import { Features } from "../components/landing/Features"
import { About } from "../components/landing/About"
import {FAQS} from "../components/landing/FAQs"
import Footer from "@/components/ui/footer"

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Features/>
        <About/>
        <div className="w-full flex justify-center items-center mb-10"><FAQS/>
        </div>
        <Footer/>
    </>
  )
}

export default Home
