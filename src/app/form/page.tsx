
// https://zod.dev/
"use client";

import { useFormState } from "react-dom";
import { handleForm } from "./action"
import { useEffect, useState } from "react";
import { z } from 'zod';

const FormPage = () => {

  // 검증 포멧
const User = z.object({
  id: z.optional(z.string().min(3, {message: "아이디는 3글자 이상 입력 필요"})),
  username: z.string({message: "이름을 입력하세요."}),
  email: z.string({message: "이메일을 입력하세요."}).email({message: "이메일의 형식이 아닙니다."}),
  age: z.number({message: "숫자를 입력하세요."}),
});


  const [state, action] = useFormState(handleForm, {initialState : {}} as any)

  useEffect(() => {

  })

  // 유효성 검증
  const validated = (formData: FormData) => {

    // 데이터 유효성 검사
    const validatedUser = User.safeParse({
      id: formData.get('id') || undefined,
      username: formData.get('username') || undefined,
      email: formData.get('email') || undefined,
      age: formData.get('age') ? parseInt(formData.get('age') as string) : undefined
    })


    if (validatedUser.success) {
      action(formData)
    } else {
      alert(validatedUser.error.errors[0].message)
    }
  }

  useEffect(() => {
    console.log(state)
  } , [state])

  // console.log(state)

  return (
    <form action={validated}>
      <input name="id"/>
      <br/>
      <input name="username"/>
      <br/>
      <input name="email"/>
      <br/>
      <input name="age"/>
      <br/>
      {/* <span>{state?.error ?? ''}</span> */}
      <button type="submit">Submit</button>
    </form>
)
}

export default FormPage