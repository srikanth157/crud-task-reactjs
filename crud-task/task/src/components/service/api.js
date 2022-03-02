import axios from "axios";


const url="https://621cb914768a4e1020b3160c.mockapi.io/users"


export const GetAllUsers= async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}


export const Deleteusers=async(id)=>{
    return await axios.delete(`${url}/${id}`)
}

export const addUserDetails= async(user)=>{
    return await axios.post(`${url}`,user)
}

export const EditUserDetails=async(id,user)=>{
    return await axios.put(`${url}/${id}`,user)
}