import Head from 'next/head'
import Header from '@components/Header'
import WhatWeDoBlock from '@components/WhatWeDoBlock';
import SmallRef from '@components/SmallRef';
import { attributes, react as HomeContent } from '../content/home.md';
import AddBlock from '@components/addBlock';

export default function Home({lan}) {
  let { title, items } = attributes;
  return (
    <>      
    <Head>
      <title>FLOU</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <Header title={"FLOU: joku iskulause? Huom kieli: "+lan} />
      <WhatWeDoBlock/>
      <AddBlock/>
      <SmallRef items={items}/>
    </div>
  </>
    
  )
}
