import axios from "axios";

export function getAllCategory() {
    return axios.get("http://127.0.0.1:5000/allCategory")
        .then(res => res.data)
}

export function getCategoryContent(category_id) {
    return axios.get(`http://127.0.0.1:5000/categoryContent?category_id=${category_id}`)
        .then(res => res.data)
}

export function updateCategoryID(content_id, category_id) {
    return axios.get(`http://localhost:5000/updateContentCategoryID?content_id=${content_id}&category_id=${category_id}`)
        .then(res => res)
}