"use client"
import { useMemo } from 'react'
import { useStore } from '../../src/store'
import { ProductDetail } from '../product/ProductDetail'
import { formatCurrency } from '@/src/utils'
import { createOrder } from '@/actions/create-order-action'
import { OrderSchema } from '@/src/schema'
import { toast } from 'react-toastify'




export const OrderSummary = ()=> {
    const { order, clearCart } = useStore()

    const total = useMemo(()=> order.reduce((total, item) => total + (item.quantity * item.price),0),[order])

    const handleCreateOrder = async(formData: FormData)=> {
        const data = {
            name: formData.get('name'),
            total,
            order
        }
        const result = OrderSchema.safeParse(data)
        console.log(result)
        if(!result.success) {
            result.error.issues.forEach((issue)=> {
                toast.error(issue.message)
            })
        }
        const response = await createOrder(data)
        if(response?.errors) {
            response.errors.forEach((issue)=> {
                toast.error(issue.message)
            })
        }
        toast.success('Pedido agregado correctamente')
        clearCart()
    }
    
    return (
        <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
            {order.length === 0 ? 'La orden esta vacia' : (
                <>
                    <div>
                        {order.map(item => (
                            <ProductDetail key={item.name} item={item} />
                        ))}
                        <p className='text-center font-black text-2xl mt-4'>Total a pagar: {' '}
                            <span className='text-2xl text-orange-500'>{formatCurrency(total)}</span>
                        </p>
                    </div>
                    <form action={handleCreateOrder} className='text-center my-4 space-y-2'>
                        <input className='w-full  border border-gray-300 focus:outline-none focus:border-2 focus:border-orange-300 transition-colors p-4' type="text" name="name" placeholder='Tu nombre' />
                        <input className='p-4 uppercase text-white bg-black font-black cursor-pointer hover:bg-black/85 transition-colors' type="submit" value="Ordenar" />
                    </form>
                </>
            )}
        </aside>
    )
}