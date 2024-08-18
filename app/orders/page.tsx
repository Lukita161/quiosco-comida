"use client"

import { LatestOrderItem } from "@/components/orders/LatestOrderItem"
import { Logo } from "@/components/ui/Logo"
import { OrderWithProducts } from "@/src/types"
import useSWR from "swr"

const OrdersPage = ()=> {
    const url = '/orders/api'
    const fetcher = ()=> fetch(url).then(res=> res.json()).then(data => data)
    const { data, isLoading, error } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 60000,
        revalidateOnFocus: false
    })

    if(isLoading) return <p>Cargando...</p>

    if(data) return (
        <>
            <Logo />
            <h1 className="text-5xl font-black text-gray-700 text-center mt-10">Ordenes listas</h1>
            {data.length ? (
                <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10">
                    {data.map(order => (
                        <LatestOrderItem key={order.id} order={order} />
                    ))}
                </div>
            ) : <p className="text-4xl font-black text-center">No hay ordenes aun</p>}
        </>
    )
}

export default OrdersPage