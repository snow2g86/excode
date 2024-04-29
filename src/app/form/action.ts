"use server"

export const handleForm = async (prevState: any, formData: FormData) => {

    const returnObj = {
        error: '',
        success: ''
    }

    console.log(`서버로 데이터 전송`)

    await new Promise((resolve) => setTimeout(resolve, 1000))
    const password = formData?.get('password') || ''

    // 유효성 검사
    if (`${password}`?.length > 1) {
        console.log(123)
        returnObj.success = '완료'
    } else {
        console.log(321)
        returnObj.error = '패스워드 1자 이상 입력'
    }
    
    return returnObj
}
