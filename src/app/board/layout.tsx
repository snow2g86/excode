'use client'

import Btn from "@/component/Btn";
import SessionStore from "@/store/sessionStore";
import { redirect } from "next/navigation";
import { useEffect } from "react";

// 리스트 페이지 전체 레이아웃
const BoardLayout = (
  {children}
  :
  {children: React.ReactNode}
) => {
  // 세션 스토어
  const { userId, logout  } = SessionStore();

  const css = {
    background: '#666666',
    color: 'white',
    fontSize: '1rem',
    display: 'block',
    with: '100%',
    padding: '15px'
  }

  useEffect(() => {
    if (!userId) redirect('/loginForm')
  }, [userId])

  return(
    <>
      <h1 style={css}>게시판</h1>
      <br/>
      {children}
      <br/>
      <Btn name="로그아웃" action={logout} />
    </>
  ) 
}

export default BoardLayout;