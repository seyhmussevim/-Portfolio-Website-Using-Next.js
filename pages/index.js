import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Intro from '@/components/Intro'
import Services from '@/components/Services'
import { data } from '@/data'
import Testimonials from '@/components/Testimonials'
import Image from "next/legacy/image"




export default function Home({services}) {
  return (
    <div >
      <Head>
       
        <title>Seyhmus Sevim</title>
        <meta 
        name="description"
         content="Front-End Developer" 
          
         />
       
      </Head>
      <Intro/>
      <Services services={services}/>
      <Testimonials/>
      
      </div>
  )
}


export const getStaticProps= () => {
  const services =  data;
  return{
    props:{services},
  };
}