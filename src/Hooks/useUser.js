import axios from "axios"

const useUser = ()=>{
    const deleteUser = async(id)=>{
        const url = `${process.env.REACT_APP_API_BASE_URL}/api/user/delete/${id}`;
        const res =await axios.delete(url)
        return res.data
    }

    const verifyUser = async(email)=>{
        const url = `${process.env.REACT_APP_API_BASE_URL}/api/seller/verify/${email}`;
        const res = await axios.get(url)
        return res.data
    }
    return {
        deleteUser,
        verifyUser
    }
}

export default useUser