import Link from "next/link"
type ProductsPaginationProps = {
    page: number,
    totalPages: number
}

export const ProductsPagination = ({page, totalPages}: ProductsPaginationProps)=> {

    const pages = Array.from({length: totalPages}, (_, i) => i+1)

    return (
        <nav className="flex justify-center space-x-1">
            {page > 1 && (
                <Link className="bg-white px-4 py-2 text-sm ring-1 ring-inset border-gray-300 focus:z-10 cursor-pointer" href={`/admin/products?page=${page-1}`}> &laquo; </Link>
            )}
            {pages.map((currentPage)=> (
                <Link className={`${page === currentPage && 'font-black'} bg-white px-4 py-2 text-sm ring-1 ring-inset border-gray-300 focus:z-10 cursor-pointer`} key={currentPage} href={`/admin/products?page=${currentPage}`}>{ currentPage }</Link>
            ))}
            {page < totalPages && (
                <Link className="px-4 bg-white py-2 text-sm ring-1 ring-inset border-gray-300 focus:z-10 cursor-pointer" href={`/admin/products?page=${page+1}`}> &raquo; </Link>
            )}
        </nav>
    )
}