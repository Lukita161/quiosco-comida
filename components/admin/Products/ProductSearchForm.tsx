"use client"

import { useRouter } from "next/navigation"
import { SearchSchema } from "@/src/schema"
import { toast } from "react-toastify"


export const ProductSearchForm = ()=> {
    const router = useRouter()
    const handleSearchForm = async(formData: FormData) => {
        const data = { search: formData.get('search') }
        const result = SearchSchema.safeParse(data)
        if(!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
            return 
        }
        router.push(`/admin/products/search?search=${result.data.search}`)
    }

    return (
        <form action={handleSearchForm} className="flex items-center space-x-2">
            <input className="w-full p-2 border bg-white placeholder:text-gray-400 border-gray-300" type="text" name="search" placeholder="Nombre del producto" />
            <input className="w-36 text-center uppercase text-sm bg-amber-200 rounded shadow-md p-3 cursor-pointer hover:shadow-2xl hover:bg-amber-300 transition-colors" type="submit" value="Buscar" />
        </form>
    )
}