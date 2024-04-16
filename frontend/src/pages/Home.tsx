import Navbar from "@/components/ui/main-nav"
import { Hero } from "./Hero"
import { Features } from "./Features"
import { About } from "./About"
import {FAQS} from "./FAQs"
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
