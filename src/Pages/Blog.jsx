import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { ColourfulText } from "../components/ui/ColourfulText";

const posts = [
  {
    id: "1",
    title: "Mastering React Hooks",
    content: `
      <h2>Understanding React Hooks</h2>
      <p>React Hooks allow you to use state and other React features without writing a class. They simplify component logic, making code cleaner and more maintainable.</p>
  
      <h3>Why Use Hooks?</h3>
      <p>Hooks enable functional components to manage state, handle side effects, and access context, eliminating the need for class components. This leads to better readability and reusability.</p>
  
      <h3>Commonly Used Hooks</h3>
      <ul>
        <li><strong>useState:</strong> Manages state in functional components. It returns a stateful value and a function to update it.</li>
        <li><strong>useEffect:</strong> Handles side effects like data fetching, subscriptions, or manually changing the DOM. It runs after the render and can clean up effects when needed.</li>
        <li><strong>useContext:</strong> Provides access to global data or shared states without prop drilling, making state management across components easier.</li>
      </ul>
  
      <h3>Best Practices with Hooks</h3>
      <p>Always call Hooks at the top level of your component or custom Hook to maintain consistent behavior. Avoid calling Hooks inside loops, conditions, or nested functions.</p>
  
      <h3>Snippet Showcase</h3>
      <p>Quick snippets to get you started:</p>
      <ul>
        <li><code>const [value, setValue] = useState('');</code> - Initializes state with an empty string.</li>
        <li><code>useEffect(() => console.log('Mounted'), []);</code> - Logs a message when the component mounts.</li>
        <li><code>const theme = useContext(ThemeContext);</code> - Accesses the current theme from the context.</li>
      </ul>
    `,
    date: "2024-02-28",
    readTime: "7 min read",
    tags: ["React", "JavaScript", "Web Development"],
  },
  {
    id: "2",
    title: "The Rise of Edge Computing",
    content: `
      <h2>What is Edge Computing?</h2>
      <p>Edge computing brings computation and data storage closer to the devices or locations where it's needed, reducing the need to send data back and forth to centralized servers. This enables faster processing, improved efficiency, and real-time decision-making capabilities.</p>
  
      <h3>Why is Edge Computing Important?</h3>
      <p>In the era of IoT and smart devices, edge computing addresses the limitations of traditional cloud computing. It minimizes latency, reduces bandwidth usage, and ensures critical data can be processed instantly, which is vital for applications like autonomous vehicles, smart cities, and healthcare monitoring.</p>
  
      <h3>Benefits of Edge Computing</h3>
      <ul>
        <li><strong>Reduces Latency:</strong> Real-time data processing at the source eliminates delays caused by distant servers.</li>
        <li><strong>Improves Security:</strong> Local data handling reduces exposure to potential cyber threats during data transit.</li>
        <li><strong>Enhances IoT Performance:</strong> Handles large volumes of data from connected devices more efficiently.</li>
      </ul>
  
      <h3>Real-World Applications</h3>
      <p>Edge computing is transforming industries:</p>
      <ul>
        <li><strong>Healthcare:</strong> Real-time patient monitoring devices for immediate alerts.</li>
        <li><strong>Retail:</strong> Personalized in-store experiences using smart sensors.</li>
        <li><strong>Autonomous Vehicles:</strong> Processes data instantly for safe, real-time decision-making.</li>
      </ul>
  
      <h3>Edge vs. Cloud Computing</h3>
      <p>While cloud computing remains essential for large-scale data storage and processing, edge computing complements it by handling time-sensitive tasks locally. The future lies in a hybrid approach where both technologies work together for maximum efficiency.</p>
    `,
    date: "2024-01-20",
    readTime: "6 min read",
    tags: ["Technology", "Cloud", "Edge Computing"],
  }
  ,
  {
    id: "3",
    title: "Exploring the Power of Tailwind CSS",
    content: `
      <h2>Introduction to Tailwind CSS</h2>
      <p>Tailwind CSS is a utility-first CSS framework designed to build modern, responsive user interfaces rapidly. Unlike traditional CSS frameworks that rely on predefined components, Tailwind allows developers to create custom designs with low-level utility classes.</p>
  
      <h3>Why Choose Tailwind?</h3>
      <ul>
        <li><strong>Highly Customizable:</strong> Modify every aspect of your design with a simple configuration file.</li>
        <li><strong>Less Custom CSS:</strong> Focus on using utilities rather than writing custom styles from scratch.</li>
        <li><strong>Responsive by Design:</strong> Built-in responsive utilities make mobile-first design effortless.</li>
      </ul>
  
      <h3>Core Concepts of Tailwind CSS</h3>
      <p>Tailwind is built on the idea of composition. Instead of writing new CSS for each component, you combine utility classes to achieve the desired look. This makes development faster and reduces code bloat.</p>
  
      <h3>Example Snippets</h3>
      <ul>
        <li><code>&lt;button class="bg-blue-500 text-white py-2 px-4 rounded"&gt;Click Me&lt;/button&gt;</code> - Creates a styled button with minimal code.</li>
        <li><code>&lt;div class="grid grid-cols-3 gap-4"&gt;...&lt;/div&gt;</code> - Implements a responsive grid layout.</li>
      </ul>
  
      <h3>Tailwind in Action</h3>
      <p>Tailwind's real power shines when combined with frameworks like React, Vue, or Next.js. It promotes clean code, rapid prototyping, and easy maintenance, making it a favorite among modern developers.</p>
    `,
    date: "2024-03-10",
    readTime: "4 min read",
    tags: ["CSS", "Frontend", "Tailwind"],
  },
  {
    id: "4",
    title: "Introduction to Next.js 14",
    content: `
      <h2>Why Next.js 14 is a Game Changer</h2>
      <p>Next.js 14 introduces groundbreaking features that enhance performance, scalability, and developer experience. As a React framework, it simplifies server-side rendering, static site generation, and dynamic routing, making it ideal for modern web applications.</p>
  
      <h3>Key Features in Next.js 14</h3>
      <ul>
        <li><strong>TurboPack:</strong> A new bundler that significantly improves build speeds and performance.</li>
        <li><strong>Enhanced SSR Performance:</strong> Optimized server components for faster load times and efficient resource management.</li>
        <li><strong>Advanced Middleware:</strong> Improved routing capabilities for dynamic, personalized content delivery.</li>
      </ul>
  
      <h3>What’s New?</h3>
      <p>Next.js 14 focuses on three pillars: performance, flexibility, and simplicity:</p>
      <ul>
        <li><strong>Faster Hot Reloading:</strong> Improved developer experience with near-instant feedback during development.</li>
        <li><strong>Optimized Image Handling:</strong> Advanced image optimization with automatic resizing and lazy loading.</li>
        <li><strong>Edge-Ready:</strong> Seamless deployment to edge networks for global scalability.</li>
      </ul>
  
      <h3>Sample Code</h3>
      <ul>
        <li><code>export const getServerSideProps = async () =&gt; {...}</code> - Fetch data server-side for dynamic rendering.</li>
        <li><code>&lt;Image src="/logo.png" width={200} height={200} /&gt;</code> - Optimized image component for performance.</li>
      </ul>
  
      <h3>Conclusion</h3>
      <p>Next.js 14 pushes the boundaries of what’s possible with modern web development. Its focus on speed, scalability, and simplicity makes it the go-to choice for developers building high-performance applications.</p>
    `,
    date: "2024-03-05",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Web Development"],
  },
];

const BlogPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) return <h1 className="text-red-500">Post Not Found</h1>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900 py-20 px-4">
      <div className="max-w-5xl w-full space-y-8">
        <NavLink
          to="/blog"
          className="inline-flex items-center text-yellow-500 hover:text-yellow-400 mb-6 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 transition-transform group-hover:-translate-x-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-lg font-medium">All Articles</span>
        </NavLink>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl shadow-md p-10 transition-shadow duration-300 w-230 ml-10">
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            <ColourfulText text={post.title} />
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-semibold text-yellow-600 dark:text-yellow-400"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed text-justify">
            <div
              className="prose dark:prose-invert max-w-none text-lg leading-relaxed text-justify"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
