// "use client";

import { getAPI, postAPI } from "@/utill/api";
import Link from "next/link";

async function getServerSideProps() {
  const res = await fetch(`https://api.github.com/repos/vercel/next.js`)
  const projects = await res.json()
 
  return projects
}

export default async function listMain() {

  // console.log(await getServerSideProps())
  // useEffect(() => {
  //   console.log(123)
  // }, [])

  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const res = await fetch('/api')

  // const api = await getAPI({url: 'https://api.github.com/repos/vercel/next.js'})

  // const response = await fetch('/api/page', {
  //   method: 'POST',
  //   // body: { id: 1} ,
  // }).catch(() => {
  //   console.log('error')
  // })

  // console.log(api.id)

  return (
    <>
      <h1>메인화면</h1>
      <Link href="/board/notice">공지사항 목록</Link>
    </>
  );
}