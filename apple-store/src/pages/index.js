import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Categories from '../../components/Categories'
import FeaturedProducts from '../../components/FeaturedProducts'
import Footer from '../../components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home({featuredProducts}) {
  return (
    <>
      <Head>
        <title>Apple Store</title>
        <link rel="shortcut icon" href="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" />
      </Head>
      <>
        <Navbar />
        <Hero />
        <Categories />
        <FeaturedProducts products={featuredProducts}/>
        <Footer />
      </>
    </>
  )
}

export async function getServerSideProps(){
  const { data } = await axios.get(`http://localhost:3000/api/products`)

  return {
    props: {
      featuredProducts: data
    }
  }
}