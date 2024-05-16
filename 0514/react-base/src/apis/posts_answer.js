import axios from 'axios';

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';
// Service 만들기
const postService = axios.create({
    baseURL: POST_URL,
    headers: {
        'Content-type': 'application/json'
    }
});
postService.interceptors.request.use((config)=>{
    // 실제 request를 보내기 직전 처리하는 부분
}, err=>{
    // 에러시 처리부분.
})
postService.interceptors.response.use((resp)=>{
    // response를 받고난 직후 처리하는 부분
},(error)=>{
    // response가 에러시 처리하는 부분
})

export const getPosts = async () => {
    const resp = await postService.get('/');
    return resp.data;
}

export const postPosts = async (post) => {
    const resp = await postService.post('/', post);
    return resp.data;
}

export const deletePosts = async (postId)=>{
    const resp = await postService.delete(`/${postId}`);
    return resp.data;
}

export const putPosts = async (postId, post)=>{
    const resp = await postService.put(`/${postId}`, post);
    return resp.data;
}