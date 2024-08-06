import React from 'react';

const Blog = () => {
 
  const blogPosts = [
    {
      id: 1,
      title: '',
      author: '',
      date: '',
      summary: '.',
      imageUrl: '',
    },
    {
      id: 2,
      title: '',
      author: '',
      date: '',
      summary: '',
      imageUrl: '',
    },
    {
      id: 3,
      title: '',
      author: '',
      date: '',
      summary: '',
      imageUrl: '',
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
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

