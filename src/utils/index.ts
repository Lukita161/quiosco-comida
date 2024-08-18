export const formatCurrency = (currency: number) => {
    return new Intl.NumberFormat('en-US', {
        currency: 'USD',
        style: 'currency'
    }).format(currency)
}

export const getImagePath = (imagePath: string) => {
    const cloudinaryBaseUrl = 'https://res.cloudinary.com'
    if(imagePath.startsWith(cloudinaryBaseUrl)) {
        return imagePath
    } else {
        return `/products/${imagePath}.jpg`
    }
}