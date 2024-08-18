import { EditProductForm } from "@/components/admin/Products/EditProductForm"
import ProductForm from "@/components/admin/Products/ProductForm"
import { GoBackButton } from "@/components/ui/GoBackButton"
import { Header } from "@/components/ui/Header"
import { prisma } from "@/src/lib/prisma"
import Link from "next/link"
import { notFound } from "next/navigation"

const getProductById = async(id: number)=> {
    const product = await prisma.product.findUnique({
        where: {
            id: id
        }
    })
    if(!product) {
        notFound()
    }
    return product
}

export default async function EditProductPage({params}: {params: {id:string}}) {
    const product = await getProductById(+params.id)

    return (
        <>
            <Header>Editar producto: {product.name}</Header>
            <GoBackButton />
            <EditProductForm>
                <ProductForm product={product} />
            </EditProductForm>
        </>
    )
}