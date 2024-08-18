"use client"

import { updateProduct } from "@/actions/update-product-action"
import { ProductSchema } from "@/src/schema"
import { useParams, useRouter } from "next/navigation"
import { ReactNode } from "react"
import { toast } from "react-toastify"

export const EditProductForm = ({ children }: {children: ReactNode})=> {
    const router = useRouter()
    const params = useParams()
    const id = +params.id!
    const handleSubmit = async(formData: FormData)=> {
        const data = {
            name: formData.get('name'),
            price: formData.get('price'),
            categoryId: formData.get('categoryId'),
            image: formData.get('image')
        }
        const result = ProductSchema.safeParse(data)
        if(!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
        }
    const response = await updateProduct(data, id)
    if(response?.errors) {
        response.errors.forEach(issue => {
            toast.error(issue.message)
        })
    }
    router.push('/admin/products')
    toast.success('Producto creado correctamente')

    }
    return (
            <div className="max-w-3xl mx-auto mt-10 px-5 py-10 rounded-md bg-white shadow-md">
                <form action={handleSubmit} className="space-y-5">
                    {children}
                    <input type="submit" value="Guardar cambios" />
                </form>
            </div>
    )
}