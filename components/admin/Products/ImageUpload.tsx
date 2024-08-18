"use client"

import { getImagePath } from "@/src/utils"
import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { useState } from "react"
import { TbPhotoPlus } from "react-icons/tb"

export const ImageUpload = ({image}: {image: string | undefined})=> {
    const [imageUrl, setImageUrl] = useState('')
    return (
        <CldUploadWidget
            uploadPreset="gegyanqg"
            options={{maxFiles: 1}}
            onSuccess={(result, {widget})=> {
                if(result.event === 'success') {
                    widget.close()
                    // @ts-ignore
                    setImageUrl(result.info.secure_url)
                }
            } }
        > 
            {({open})=> (
                <>
                    <div className="space-y-2">
                        <label >Imagen: </label>
                        <div onClick={()=> open()} className="relative cursor-pointer hover:opacity-60 border-neutral-300 flex flex-col items-center justify-center">
                            <TbPhotoPlus size={50} />
                            <p>Agregar imagen</p>
                            {imageUrl && (
                                <div className="absolute inset-0 w-full h-full ">
                                    <Image fill style={{objectFit: 'contain'}} src={imageUrl} alt="Imagen del producto" />
                                </div>
                            )}
                        </div>
                    </div>
                    
                    {image && !imageUrl && (
                        <div className="space-y-2">
                            <label>Imagen actual: </label>
                            <div className="relative w-64 h-64">
                                <Image style={{objectFit: 'contain'}} fill src={getImagePath(image)} alt="Imagen del producto actual" />
                            </div>
                        </div>
                    )}

                    <input type="hidden" value={imageUrl} name="image" defaultValue={imageUrl ? imageUrl : image} />
                </>
            )}
        </CldUploadWidget>
    )
}