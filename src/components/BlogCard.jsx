import React from 'react';
import { NavLink } from 'react-router-dom';
import { ColourfulText } from './ui/ColourfulText';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';

const posts = [
  {
    id: '1',
    title: 'Mastering React Hooks',
    content: `
    <h3>• Understanding React Hooks</h3>
       <p>React Hooks allow you to use state and other React features without writing a class...</p> 
  `,
    date: '2024-03-15',
    readTime: '5 min read',
    tags: ['React', 'JavaScript', 'Web Development'],
  },
  {
    id: '2',
    title: 'The Rise of Edge Computing',
    content: `
    <h3>• What is Edge Computing?</h3>
    <p>Edge computing brings computation and data storage closer to the location where it is needed...</p>
    <h3>Benefits of Edge Computing</h3>
  `,
    date: '2024-03-12',
    readTime: '8 min read',
    tags: ['React', 'Web Development'],
  },
  {
    id: '3',
    title: 'Exploring the Power of Tailwind CSS',
    content: `
    <h3>• Introduction to Tailwind CSS</h3>
    <p>Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces...</p>
    <h3>Why Choose Tailwind?</h3>
  `,
    date: '2024-03-10',
    readTime: '6 min read',
    tags: ['JavaScript', 'Programming'],
  },
  {
    id: '4',
    title: 'Introduction to Next.js 14',
    content: `
    <h3>• Why Next.js 14 is a Game Changer</h3>
    <p>Next.js 14 introduces new features like improved routing, faster builds, and enhanced server components...</p>
    <h3>Key Features in Next.js 14</h3>
  `,
    date: '2024-03-08',
    readTime: '4 min read',
    tags: ['CSS', 'Design'],
  },
];

const BlogCards = () => {
  return (
    <div className="container mx-auto p-4 pt-10 min-h-screen dark:bg-gray-900 bg-white transition-colors duration-300">
  <h2 className="text-7xl font-bold tracking-tight mb-8 mt-20 text-center text-gray-900 dark:text-white ml-85">
    <ColourfulText text="Latest Blogs" />
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 gap-y-10 px-70">
    {posts.map((post) => (
      <CardContainer
        key={post.id}
        containerClassName="w-full"
        className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-yellow-500 transition-shadow duration-300"
      >
        <CardBody>
          <NavLink to={`/blog/${post.id}`}>
            <CardItem translateZ={30} className="p-4 space-y-3">
              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-yellow-500 transition">
                {post.title}
              </h2>
              <p className="prose-lg mt-10 text-justify" dangerouslySetInnerHTML={{ __html: post.content }} />
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 mt-10 bg-gray-200 dark:bg-gray-700 rounded-full text-xs text-yellow-600 dark:text-yellow-400 mx-auto"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </CardItem>
          </NavLink>
        </CardBody>
      </CardContainer>
    ))}
  </div>
</div>

  );
};

export default BlogCards;
