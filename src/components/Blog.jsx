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
      title: 'Coder son site en  HTML/CSS',
      date: '12/01/2023',
      summary: 'Some quick example text to build on the card title and make up the bulk of the card content',
      imageUrl: coder,
    },
    {
      id: 2,
      title: 'Vendre ses produits sur le web',
      date: '02/09/2023',
      summary: 'Some quick example text to build on the card title and make up the bulk of the card content',
      imageUrl: croissance,
    },
    
    {
      id: 3,
      title: 'Se positioner sur Google',
      date: '01/08/2023',
      summary: 'Some quick example text to build on the card title and make up the bulk of the card content',
      imageUrl: google,
    },
    {
      id: 4,
      title: 'Coder en responsive design',
      date: '31/07/2023',
      summary: 'Some quick example text to build on the card title and make up the bulk of the card content',
      imageUrl: screen,
    },
    {
      id: 5,
      title: 'Techniques de référencement',
      date: '25/06/2013',
      summary: 'Some quick example text to build on the card title and make up the bulk of the card content',
      imageUrl: seo,
    },
    {
      id: 6,
      title: 'Apprendre à coder',
      date: '12/06/2013',
      summary: 'Some quick example text to build on the card title and make up the bulk of the card content',
      imageUrl: technos ,
    },
  ];

  return (
    <div className="">
       <div className='flex'>
        <img src={Banner} alt="kavi" />
      </div>
      <div className='flex justify-center flex-col'>
        <h2 className="text-3xl pt-8 font-semi-bold mb-3 text-center">BLOG</h2>
        <p className='flex justify-center underline underline-offset-8 decoration-blue-500 decoration-4  '>
          Retrouvez ici quelques articles sur le développement
        </p>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-24">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-58 object-cover" />
            <div className="">
              <h1 className="text-xl font-semibold mb-2 pl-4 pt-2">{post.title}</h1>
              <p className="text-gray-700 pl-4">{post.summary}</p>
              <button className=' m-4 bg-blue-500 text-white rounded py-1 px-2 mt-2 mb-2'>
              Lire la suite
              </button>
              <p className="text-s bg-slate-50 pl-4 pb-0 border-1 border w-screen py-2">
                Publié le  {post.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

