"use client";

import Btn from "@/component/Btn";
import { useEffect, useState } from "react";
import { redirect } from 'next/navigation'
import SessionStore from "@/store/sessionStore";
import Input from "@/component/Input";
import Link from "next/link";

const UserPage = () => {
  // 세션 스토어
  const { userId, loginTime, logout, setUser  } = SessionStore();

  // 수정 필드 활성화 여부
  const [useModify, setModofy] = useState<boolean>(false)

  // 수정 필드
  const [userInputId, setUserInputId] = useState<string | undefined>(userId)

  useEffect(() => {
    if (!userId) redirect('/loginForm')
  }, [userId])

  return (
    <>
      {!useModify ? (
        <>
          <span>사용자 ID: {userId}</span>
          <br/>
          <span>로그인 시간: {loginTime?.toDateString()}</span>
          <br/>
        </>
      ) : (
        <>
          <span>사용자 ID: </span>
          <Input
          name='id'
          value={userInputId}
          onChange={setUserInputId}
        />
          <br/>
          <span>로그인 시간: {loginTime?.toDateString()}</span>
          <br/>
        </>
      )}
      <Btn
        name={useModify ? "저장" : "수정"}
        action={() => {
          if (useModify) {
            // 수정
            setUser({
              userId: userInputId ? userInputId : '',
              loginTime: loginTime ? loginTime: new Date()
            })
          }

          setModofy((data) => !data)
        }}
      />
      <br/>
      <br/>
      <Link href="/board">게시판 메인</Link>
      <br/>
      <Btn name="로그아웃" action={logout} />
    </>
  )
}

export default UserPage