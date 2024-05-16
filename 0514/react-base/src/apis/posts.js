import axios from 'axios';

export function getPosts(idx) {
    const url = `https://jsonplaceholder.typicode.com/posts/${idx}`;
    return axios.get(url).then((response) => response.data);
}

export function delPosts(idx) {
  const url = `https://jsonplaceholder.typicode.com/posts/${idx}`;
  return axios.delete(url).then((response) => response.data);
}

export function putPosts(body) {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    return axios
      .post(url, JSON.stringify(body), {
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
      .then((response) => response.data);
  }

export function putPost(idx, body) {
    const url = `https://jsonplaceholder.typicode.com/posts/${idx}`;
    return axios
      .put(url, JSON.stringify(body), {
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
      .then((response) => response.data);
  }