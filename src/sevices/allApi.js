import { commonApi } from "./commonApi";
import { serverurl } from "./serverUrl";

// api call for upload video 

export const uploadVideo = async(reqBody) => {
    return await commonApi('POST', `${serverurl}/videos`,reqBody)
}

// get all videos api call

export const getAllVideos = async() => {
    return await commonApi('GET', `${serverurl}/videos`,"")
}

// delete video
export const deleteVideo = async(id) => {
    return await commonApi('DELETE',`${serverurl}/videos/${id}`,"")
}

// add to history
export const addToHistory = async (data) => {
    return await commonApi('POST',`${serverurl}/history`,data)
}

// get history
export const getHistory = async () =>{
    return await commonApi('GET',`${serverurl}/history`,"")
}

// delete history
export const deleteWatchHistory = async (id) => {
    return await commonApi('DELETE',`${serverurl}/history/${id}`,{})
}

// add category
export const addCategory = async (data) => {
    return await commonApi('POST', `${serverurl}/categories`,data)
}

// get all categories
export const getAllCategories = async () => {
    return await commonApi('GET',`${serverurl}/categories`,"")
}

// delete category
export const deleteVideoCatergory = async (data) => {
    return await commonApi('DELETE',`${serverurl}/categories/${data}`,{})
}

// get video details by id
export const getVideoDetailsById = async (id) => {
    return await commonApi('GET',`${serverurl}/videos/${id}`,'')
}

// update category
export const updateCategory = async (id,data) => {
    return await commonApi('PUT',`${serverurl}/categories/${id}`,data)
}