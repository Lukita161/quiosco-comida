import { ProductCart } from "@/components/product/ProductCart"
import { Header } from "@/components/ui/Header"
import { prisma } from "@/src/lib/prisma"
import React from "react"
const getProducts = async(category: string)=> {
    const products = await prisma.product.findMany({where: {category: {slug: category}}})
    return products
}
async function OrderPage({ params }: {params: {category: string}}) {
    const products = await getProducts(params.category)
    
    return (
        <>
            <Header>Elige y personaliza tu pedido</Header>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                {products.map(product => (
                    <ProductCart key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}

export default OrderPage