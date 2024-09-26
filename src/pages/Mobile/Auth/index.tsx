import { useState } from 'react'
import React from 'react'

import Login from './Login'
import ChangeMerchant from './ChangeMerchant'
export default function Auth() {
    const [step, setStep] = useState(1)
    return (
        <>
        <div onClick={()=>window.$router.push('/reactApp/attend')}>跳转到attend</div>
        <div onClick={()=>window.$router.push('/sso/login')}>跳转到sso登录</div>
        <div onClick={()=>window.history.pushState(null,'','/sso/login')}>通过pushState跳转到sso</div>
            {step === 1 && <Login setStep={setStep}/>}
            {step === 2 && <ChangeMerchant />}
        </>
    )
}