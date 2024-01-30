
import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"
// register

export const registerAPI = async (user)=>{
        return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

// login
export const loginAPI = async (user)=>{
        return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
  
}

// add blog
 export const addBlogAPI = async (reqBody,reqHeader)=>{
        return await commonAPI("POST",`${BASE_URL}/blog/add`,reqBody,reqHeader)
  
 }

//  homeblogs

export const homeBlogsAPI = async()=>{
        return await commonAPI("GET",`${BASE_URL}/blog/home-blogs`,"","")
}

// allblogs
export const allBlogsAPI = async(searchKey,reqHeader)=>{
        return await commonAPI("GET",`${BASE_URL}/blog/all?search=${searchKey}`,"",reqHeader)
}

// userblogs
export const UserBlogAPI = async(reqHeader)=>{
        return await commonAPI("GET",`${BASE_URL}/user/all-blogs`,"",reqHeader)
}

// get a blog
export const GetABlogAPI = async(blogId)=>{
        return await commonAPI("GET",`${BASE_URL}/blog/view/${blogId}`,"","")
}

// edit a blog
export const editBlogAPI = async(blogId,reqBody,reqHeader)=>{
        return await commonAPI("PUT",`${BASE_URL}/blog/edit/${blogId}`,reqBody,reqHeader)
}

// delete blog
export const deleteBlogAPI = async(blogId,reqHeader)=>{
        return await commonAPI("DELETE",`${BASE_URL}/blog/remove/${blogId}`,{},reqHeader)
}

// edit profile
 
export const editProfileAPI = async(reqBody,reqHeader)=>{
        return await commonAPI("PUT",`${BASE_URL}/user/edit`,reqBody,reqHeader)
}

// getuserProfile
export const getUserProfileAPI = async(id)=>{
        return await commonAPI("GET",`${BASE_URL}/user/view/${id}`,"","")
    }

    
// getprofileblogs
export const getUserBlogsAPI = async(id)=>{
        return await commonAPI("GET",`${BASE_URL}/user/blogs/${id}`,"","")
    }
