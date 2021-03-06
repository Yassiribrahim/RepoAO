import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getallnews } from '../services';
import CardNews from '../components/CardNews';
import RecNews from '../components/RecNews';
import Statistics from '../components/Statistics';
import Reports from '../components/Reports';
import Activities from '../components/Activities';
import Projects from '../components/Projects';
import Awards from '../components/Awards ';
import Archive from '../components/Archive ';
import Ads from '../components/Ads';

const posts = [{title:'Yassir Title1 ', excerpt:'Yassir  Excerpt1'},{title:' Yassir Title 2 ',excerpt:' YassirExcerpt2'},];

export default function Home({allnews}) {
  
  
      return (
<div className="container mx-auto px-10 mb-8">
      <Head>
        <title>AO Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-sky-900 ">
        
              <div className="col-span-1 lg:col-span-8 p-9">
                    {allnews.map((allnew) =>  <CardNews allnew={allnew} key={allnew.node.aoTitle} /> )}   
                                    
              </div>
              
            <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        <RecNews />
                        <Statistics />
                        <Reports />
                        <Activities />
                        <Projects />
                        <Awards />
                        <Ads />
                    </div>
              </div>
          </div>
    </div>
  )
}

// Fetch data at build time
export async function getStaticProps() {
  const allnews = (await getallnews()) || [];
  return {
    props: { allnews },
  };
}

 

