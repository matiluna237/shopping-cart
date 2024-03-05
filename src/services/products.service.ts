

const URL_DATA = import.meta.env.VITE_URL_DATA

export async function fetchProductsFromJson(){
    const res = await fetch(URL_DATA)
    const json = res.json()
    return json
}