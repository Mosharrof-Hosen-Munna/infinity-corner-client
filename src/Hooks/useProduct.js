
import axios from "axios"

const useProduct = ()=>{

    const createProduct = async (data)=>{
       const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/product/create`,data)
        return res.data
    }

    return {
        createProduct
    }
}

export default useProduct