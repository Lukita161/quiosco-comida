import { CreateProductForm } from "@/components/admin/Products/CreateProductForm";
import ProductForm from "@/components/admin/Products/ProductForm";
import { Header } from "@/components/ui/Header";

export default function CreateProductPage() {
    return (
        <>
            <Header>Crear producto</Header>
            <CreateProductForm>
                <ProductForm />
            </CreateProductForm>
        </>
    )
}