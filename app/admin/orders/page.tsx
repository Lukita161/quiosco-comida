"use client"

import useSWR from "swr"
import OrderCard  from "@/components/order/OrderCard"
import { Header } from "@/components/ui/Header"
import { prisma } from "@/src/lib/prisma"
import { OrderWithProducts } from "@/src/types"

const getPendingOrders = async()=> {
    const orders = await prisma.order.findMany({
        where: {
            status: false
        },
        include: {
            orderProducts: {
                include: {
                    product: true
                }
            }
        }
    })
    return orders
}

const OrdersPage = ()=> {
    const url = '/admin/orders/api'
    const fetcher = ()=> fetch(url).then(res=> res.json()).then(data => data)
    const { data, isLoading, error } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 60000,
        revalidateOnFocus: false
    })
    if(isLoading) return <p>Cargando...</p>
    if(data) return (
        <>
            <Header>Administra las ordenes</Header>
            {data.length ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                    {data.map(order => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </div>
            ) : <p>No hay ordenes aun</p>}
        </>
    )
}

export default OrdersPage