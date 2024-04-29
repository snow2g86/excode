"use client";

import { redirect } from 'next/navigation'
import Btn from '@/component/Btn';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import SessionStore from '@/store/sessionStore';
import Input from '@/component/Input';

// 에러 메세지 타입
interface ErrorType {key: string, message: string}

const loginForm = () => {
  // 세션 스토어
  const { userId, setUser  } = SessionStore();

  // 스테이터스 - form 데이터
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [errors, setErrors] = useState<ErrorType[]>([])

  // 서버 호출 전 검증
  const server = () => {
    // 검증 포멧
    const User = z.object({
      id: z.string().min(1,{message: "아이디를 입력해 주세요."}),
      pw: z.string().min(1,{message: "비밀번호를 입력해 주세요."}),
    });

    // 데이터 유효성 검사
    const validatedUser = User.safeParse({id, pw})

    if (validatedUser.success) {
      // 유효성 통과 후 상황에 맞는 코드 입력
      setErrors([])
      setUser({userId: id, loginTime: new Date()})

    } else {
      const errors = validatedUser.error.errors
      const list: ErrorType[] = [];
      errors.forEach((obj) => {
        list.push({key: `${obj.path[0]}`, message: obj.message})
      })
      setErrors(list)
    }
  }

  // 에러 메세지 확인
  const errorMsg = (id: string) => {
    let msg = ''
    const list: ErrorType[] = errors.filter(({key}) => key === id)

    if (list.length > 0) {
      msg = list[0].message;
    }
    return msg
  }

  // 세션 변경시 
  useEffect(() => {
    if (userId) redirect('/userPage')
  }, [userId])

  return (
    <>
      <span>아이디</span> 
      :
      <Input
        name='id'
        value={id}
        onChange={setId}
      />
      {errorMsg('id')}
      <span></span>
      <br/>
      <span>비밀번호</span> 
      : 
      <Input
        name='pw'
        type='password'
        value={pw}
        onChange={setPw}
      />
      {errorMsg('pw')}
      <br/>
      <Btn
        name="login"
        action={server}
      />
    </>
  ) 
}

export default loginForm