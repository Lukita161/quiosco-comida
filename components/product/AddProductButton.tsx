"use client"

import { useStore } from "@/src/store"
import { Product } from "@prisma/client"

type AddProductButtonProps = {
    product: Product
}

export const AddProductButton = ({product}: AddProductButtonProps)=> {
    const {addToCart} = useStore()
    return (
        <button onClick={()=> addToCart(product)} className="p-2 bg-orange-400 text-sm text-black uppercase font-black" type="button">Agregar al pedido</button>
    )
}