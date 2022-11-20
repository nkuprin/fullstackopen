import Blog from '../models/blog.js';

export const initialBlogs = [
  {
    title: 'HTML is easy',
    author: 'Some author',
    url: 'some/url',
    likes: 10,
  },
  {
    title: 'Testing is easy',
    author: 'Some author',
    url: 'test/url',
    likes: 100,
  },
];

export const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};