import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export function getStaticProps(){
    return{
      props:{
        posts:[]
      }
    }
}

export default function Home({posts}) {
  return (
    <div className={styles.container}>
       hello supabase dev!
       <pre>{JSON.stringify(posts,null,2)}</pre>
    </div>
  )
}
