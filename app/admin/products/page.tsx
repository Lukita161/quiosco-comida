import { ProductSearchForm } from "@/components/admin/Products/ProductSearchForm"
import { ProductsPagination } from "@/components/admin/Products/ProductsPagination"
import ProductTable from "@/components/admin/Products/ProductsTable"
import { Header } from "@/components/ui/Header"
import { prisma } from "@/src/lib/prisma"
import Link from "next/link"
import { redirect } from "next/navigation"

const getProducts = async(page:number, pageSize:number)=> {
    const skip = (page-1) * pageSize
    const products = await prisma.product.findMany({
        skip,
        take: pageSize,
        include: {
            category: true
        }

    })
    return products
}
const productCount = async()=> {
    return await prisma.product.count()
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>
const ProductPage = async({searchParams}: {searchParams: {page: string}})=> {
    const page = +searchParams.page || 1
    const pageSize = 10

    if(page<0) redirect('/admin/products')

    const productData = getProducts(page, pageSize)
    const totalProductsData = productCount()
    const [products, totalProducts] = await Promise.all([productData, totalProductsData])

    const totalPages = Math.ceil(totalProducts / pageSize)

    if(page > totalPages) redirect('/admin/products')

    return (
        <>
            <Header>Administrar Productos</Header>
            <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:justify-between">
                <Link className="w-36 text-center text-sm bg-amber-300 rounded shadow-md p-4 cursor-pointer hover:shadow-2xl hover:bg-amber-400 transition-colors" href={'/admin/products/new'}>Crear producto</Link>
                <ProductSearchForm />
            </div>
            <ProductTable products={products} />

            <ProductsPagination page={page} totalPages={totalPages} />
        </>
    )
}

export default ProductPage