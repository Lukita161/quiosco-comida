import { ProductSearchForm } from "@/components/admin/Products/ProductSearchForm"
import ProductTable from "@/components/admin/Products/ProductsTable"
import { Header } from "@/components/ui/Header"
import { prisma } from "@/src/lib/prisma"
import Link from "next/link"

const searchProducts = async(searchTerms: string) => {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerms,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        }
    })
    return products
}

const SearchResultPage = async({searchParams} : {searchParams: {search: string}})=> {

    const resultProducts = await searchProducts(searchParams.search)
    return (
        <>
            <Header>Resultado de la busqueda</Header>
            <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:justify-between">
                <Link className="w-36 text-center text-sm bg-amber-300 rounded shadow-md p-4 cursor-pointer hover:shadow-2xl hover:bg-amber-400 transition-colors" href={'/admin/products/new'}>Crear producto</Link>
                <ProductSearchForm />
            </div>
            {resultProducts.length ? (
                <ProductTable products={resultProducts}/>
            ) : <p className="text-xl font-black text-center">No hay resultados</p>}
        </>
    )
}

export default SearchResultPage