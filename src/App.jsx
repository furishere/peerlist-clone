import { Hero } from "./components/Hero";
import { Navbar } from "./components/Nabar";

export default function App(){
  return <div className="flex justify-center bg-white">
    <div className="w-full max-w-xl  h-screen">
      <Navbar />
      <Hero />
    </div>
  </div>
}