"use client";

import Btn from "@/component/Btn"
import { redirect, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

interface UserPageType {
  params: { type: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const ListPage = ({
  params,
  searchParams
}: UserPageType) => {

  const [useGoList, setUseGoList] = useState<boolean>(false)
  
  // 라우터 가져오기
  const router = useRouter();

  // 현제 페이지 변수
  const pageNum = searchParams.pageNum ? parseInt(searchParams.pageNum as string) : 1

  // 게시판 타입
  const { type } = params

  // 파라미터 받아오기
  const setSearchParams = () => {
    return JSON.stringify(searchParams)
  }

  // 목록으로 이동
  const goToList = () => {
    router.push(`/board`)
  }

  // 페이지 이동
  const goToPageList = (selectNum: number) => {
    router.push(`/board/${type}?pageNum=${selectNum}`)
  }

  return (
    <section>
      <span>게시판 타입: {type}</span>
      <br/>
      <span>searchParams : {setSearchParams()}</span>
      <br/>
      {pageNum > 1 && (
        <Btn name="<" action={() => goToPageList(pageNum - 1)}/>
      )}
      <Btn name=">" action={() => goToPageList(pageNum + 1)}/>
      <Btn name="목록으로 가기" action={goToList}/>
    </section>
  )
}

export default ListPage;