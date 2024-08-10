import React from 'react';
import coder from '../assets/coder.jpg'
import croissance from '../assets/croissance.jpg'
import google from '../assets/google.jpg'
import screen from '../assets/screens.jpg'
import seo from '../assets/seo.jpg'
import technos from '../assets/technos.png'
import Banner from '../assets/banner.jpg'

const Blog = () => {
 
  const blogPosts = [
    {
      id: 1,
      title: 'ojoij',
      author: '',
      date: '',
      summary: '.',
      imageUrl: coder,
    },
    {
      id: 2,
      title: '',
      author: '',
      date: '',
      summary: '',
      imageUrl: croissance,
    },
    
    {
      id: 3,
      title: '',
      author: '',
      date: '',
      summary: '',
      imageUrl: google,
    },
    {
      id: 4,
      title: '',
      author: '',
      date: '',
      summary: '',
      imageUrl: screen,
    },
    {
      id: 5,
      title: '',
      author: '',
      date: '',
      summary: '',
      imageUrl: seo,
    },
    {
      id: 6,
      title: '',
      author: '',
      date: '',
      summary: '',
      imageUrl: technos ,
    },
  ];

  return (
    <div className="">
       <div className='flex w-screen'>
        <img src={Banner} alt="kavi" />
      </div>
      <h2 className="text-3xl pt-8 font-bold mb-8 text-center">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-24">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-58 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                By {post.author} | {post.date}
              </p>
              <p className="text-gray-700">{post.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

