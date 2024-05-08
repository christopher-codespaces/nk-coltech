import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../components/Hero";
import Section from "../components/section";
import Services from "../components/services";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero/>
      <Section/>
      <Services/>
      <Footer/>
    </>
  );
}
