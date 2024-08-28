import { useEffect, useState } from "react"
import { apiPlatformProfile, apiRenewToken } from "../../../api"
import { Button, CheckList, Toast } from "antd-mobile"
import { useNavigate } from "react-router-dom"
import store from "../../../utils/store";

export default function ChangeMerchant() {
    const navigate = useNavigate();
    const [merchants, setMerchants] = useState<{ id: number, name: string }[]>([])
    let merchantId: string

    useEffect(() => {
        const fetchData = async () => {
            const res = await apiPlatformProfile({})
            if (!res.success) {
                Toast.show({
                    icon: 'fail',
                    content: res.message
                })
                return
            }
            setMerchants(res.data.joinedMerchant.map((item: any) => (item.merchant)))
        }

        fetchData()
    },[])

    const confirm = async () => {

        const res = await apiRenewToken({ merchantId })
        store.setItem('__token__', res.data.token)

        Toast.show({
            icon: 'success',
            content: '登录成功'
        })

        navigate('/attend')
    }

    return (
        <>
            <CheckList defaultValue={['67']} onChange={(value: any) => merchantId = value[0]}>
                {merchants.map((item) => (
                    <CheckList.Item value={item.id} key={item.id}>{item.name}</CheckList.Item>
                ))}
            </CheckList>

            <Button onClick={confirm} block>确认</Button>
        </>
    )
}