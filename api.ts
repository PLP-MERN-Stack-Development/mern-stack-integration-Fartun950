import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Post {
  _id: string;
  title: string;
  content: string;
  category: Category;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  _id: string;
  name: string;
}

export const getPosts = () => api.get<Post[]>('/posts');
export const getPost = (id: string) => api.get<Post>(`/posts/${id}`);
export const createPost = (data: { title: string; content: string; category: string }) =>
  api.post<Post>('/posts', data);
export const updatePost = (id: string, data: { title: string; content: string; category: string }) =>
  api.put<Post>(`/posts/${id}`, data);
export const deletePost = (id: string) => api.delete(`/posts/${id}`);
export const getCategories = () => api.get<Category[]>('/categories');
export const createCategory = (data: { name: string }) => api.post<Category>('/categories', data);

