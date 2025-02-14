const snippetsData = [
  {
    id: 1,
    title: "Toast",
    description: "A simple reusable notification toasts",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    codes: [
      {
        //   title: "Basic useState Example",
        language: "javascript",
        code: `import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}`,
      },
      {
        language: "javascript",
        code: `const logout = async () => {
  await firebase.auth().signOut();
  dispatch({
    type: "LOGOUT",
  });
  toast.success("🚀 Logged out successfully!");
  router.push("/login");
};`,
      },
      {
        title: "Usage",
        description: "**1. Install react-toastify npm package**",

        language: "javascript",
        code: `npm i react-toastify`,
      },
      {
        // title: "Usage",
        description:
          "**2. Import in the root directory.** \n   \n Import two helper functions in the root directory. \n This import gives access to the toast object where all the methods live. Since it is in the root directory, it is accessible over all the pages in your app.",
        language: "javascript",
        code: `import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";`,
      },
      {
        // title: "Usage",
        description:
          "**Use toast in your app** \n  \n Use the below syntax to get access to the toast component and use it accordingly.",
        language: "javascript",
        code: `toast.success("🚀 Logged out successfully!");`,
      },
    ],
  },
  {
    id: 2,
    title: "Spotify",
    description: "Show what you're listening to.",
    image:
      "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
    codes: [
      {
        //   title: "Basic useState Example",
        language: "javascript",
        code: `import { getNowPlaying } from "../../lib/spotify";

export default async (_, res) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
};`,
      },
      {
        description: "**// lib/spotify.js**",
        code: `import fetch from "isomorphic-unfetch";
import querystring from "querystring";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(\`\${client_id}:\${client_secret}\`).toString("base64");
const NOW_PLAYING_ENDPOINT = \`https://api.spotify.com/v1/me/player/currently-playing\`;
const TOKEN_ENDPOINT = \`https://accounts.spotify.com/api/token\`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: \`Basic \${basic}\`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: \`Bearer \${access_token}\`,
    },
  });
};`,
        language: "javascript",
      },
      {
        title: "Usage",
        description:
          "**1. Create Spotify Application.** \n   \n First, we need to create a Spotify application to give us credentials to authenticate with the API. \n \n •Go to your Spotify Developer Dashboard and log in. \n •Click Create an App. \n •Fill out the name and description and click create. \n •Click Show Client Secret. \n •Save your Client ID and Secret. You'll need these soon. \n •Click Edit Settings. \n •Add http://localhost:3000 as a redirect URI. \n \nAll done! You now have a properly configured Spotify application and the correct credentials to make requests. \n \n \n**2. Authentication** \n \n There are a variety of ways to authenticate with the Spotify API, depending on your application. Since we only need permission granted once, we'll use the Authorization Code Flow. \n First, we'll have our application request authorization by logging in with whatever scopes we need. Here's an example of what the URL might look like. Swap out the 'client_id' and scopes for your own.",
          language: "javascript",
        code: `https://accounts.spotify.com/authorize?client_id=8e94bde7dd
b84a1f7a0e51bf3bc95be8&response_type=code&redirect_uri=http
%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing%20
user-top-read`,
         
      },
      {
        // title: "Usage",
        description:
          "After authorizing, you'll be redirected back to your 'redirect_uri'. In the URL, there's a 'code' query parameter. Save this value.",
        language: "javascript",
        code: `http://localhost:3000/callback?code=NApCCg..BkWtQ`,
      },
      {
        // title: "Usage",
        description:
          "Next, we'll need to retrieve the refresh token. You'll need to generate a Base 64 encoded string containing the client ID and secret from earlier. You can use this tool to encode it online. The format should be 'client_id:client_secret'. \n \n This will return a JSON response containing a refresh_token. This token is valid indefinitely unless you revoke access, so we'll want to save this in an environment variable.",
        language: "javascript",
        code: `curl -H "Authorization: Basic <base64 encoded client_id:client_secret>"
-d grant_type=authorization_code -d code=<code> -d redirect_uri=http%3A
%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token`,
      },
      {
        // title: "Usage",
        description:
          "**3. Add Environment Variables** \n \n To securely access the API, we need to include the secret with each request. We also do not want to commit secrets to git. Thus, we should use an environment variable. Learn how to add environment variables in Vercel.",
      },
    ],
  },
  {
    id: 3,
    title: "SendGrid",
    description: "Send email to a user",
    image:
      "https://static-00.iconduck.com/assets.00/sendgrid-icon-2048x2048-coy0ar5a.png",
    codes: [
      {
          title: "API call",
          description:"**/api/sendgrid.js** \n \n •Replace 'from' field to your email \n •Replace 'to' field to the email of the person you want to send the email to \n •In the 'html' and subject field, insert your custom text \n •If you don't want to use HTML, change 'html' to 'text' and write the desired text.",
        language: "javascript",
        code: `import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    await sendgrid.send({
      to: req.body.email,
      from: "work.darshanverma@gmail.com",
      subject: "Greetings! Thankyou for contacting me",
      html: \`\<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>Hello, \${req.body.email} 👋</h3>
              <div style="font-size: 16px;">
              <p>Thankyou for contacting me through my website. I'm excited to work with you.</p>
              <p><span class="spantext" style="font-weight: bold;">Reply</span> to this email with your requirements and I will get back to you.</p>
              <p>Meanwhile, <a class="blog" href="https://darshan/blog/" style="text-decoration: none;color: blue;font-weight: bold;">checkout my blog</a> to get more insights about my work.</p>
              <p>Or simply, just say Hi :) <a href="https://wa.me/91+**********?text=Hi" target="__blank" class="whatsapp" style="text-decoration: none;font-weight: bold;background: #10B981;padding: 4px;border-radius: 5px;color: white;">WhatsApp</a></p>
              <br>
              </div>
              <img src="https://logo.png" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Darshan Verma<br>Software Developer<br>+91+**********</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://darshan.in/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://darshan.in/blog/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Blog</a>
                <a href="https://github.com/darshan-verma" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="https://instagram.com/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                <a href="https://www.linkedin.com/in/darshan-verma/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                <a href="https://twitter.com" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>

              </div>
              </div>
      </body>
      </html>\`\,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
};`,
      },
      {
        title: "Usage",
        language: "javascript",
        description:"**1. Create an account on Sendgrid** \n •Create an account on sendgrid.\n •Generate an API KEY \n\n\n **2. Authenticate sender** \nSendgrid requires you to authenticate yourself (email account) which you want the emails to be sent from. For that they have clearly mentioned instructions. \n•Go to Sender Authentication page.\n•Create a new sender.\n•Fill out the form with all your details.\n•Verify by checking your mail and clicking on Verify button. \n\n **3. Set environment variable** \n In your '.env' file, create an entry for 'SENDGRID_API_KEY' and paste the credentials you retrieved from the sendgrid portal. \n **NOTE: DO NOT push this file to GitHub.** \n\n**Install @sendgrid/mail node package** \n•'npm install @sendgrid/mail'\n•We use two methods from the package: 'sendgrid.setApiKey()' and 'sendgrid.send()'\n",
        
      },
    ],
  },
  {
    id: 4,
    title: "Razorpay",
    description: "Accept payments",
    image:
      "https://w7.pngwing.com/pngs/88/578/png-transparent-razorpay-logo-thumbnail-tech-companies-thumbnail.png",
    codes: [
      {
          title: "Code",
          description:"**index.js**",
        language: "javascript",
        code: `import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  async function displayRazorpay() {
    const res = await loadRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Manu Arora Pvt Ltd",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Manu Arora",
        email: "manuarorawork@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://github.com/manuarora700">
            Razorpay Payments with Next.js
          </a>
        </h1>

        <div className={styles.makePayment}>
          <a onClick={displayRazorpay}>
            <h3>Make Payment &rarr;</h3>
          </a>
        </div>
      </main>
    </div>
  );
}`,
      },
      {
        title: "/api/razorpay.js",
        language: "javascript",
        description:"",
        code: `const Razorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    // Create an order -> generate the OrderID -> Send it to the Front-end
    // Also, check the amount and currency on the backend (Security measure)

    const payment_capture = 1;
    const amount = 499;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);

      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  } else {
    // Handle any other HTTP method
  }
}`,
      },
      {
        title: "Usage",
        language: "javascript",
        description:"**1. Create an Account on Razorpay** \n •Head over to Razorpay and create an account\n •Generate the API keys which can be found in the Test Mode dashboard \n •Store the API keys in environment variables, example environment file is provided in the source code.\n•We use serverless functions (api routes in Next.js) which acts as our backend to create 'order_id'.",
        
      },

    ],
  },
  {
    id: 5,
    title: "Navbar Hover",
    description: "A simple Navbar hover effect",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    codes: [
      {
        //   title: "Basic useState Example",
        language: "javascript",
        code: `import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  let links = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Privacy",
      link: "#privacy",
    },
    {
      name: "Terms",
      link: "#terms",
    },
  ];

  return (
    <div className="mt-20 flex space-x-4 justify-center">
      {links.map((navLink, index) => (
        <Link key={navLink.name} href={navLink.link}>
          <a
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative rounded-xl px-4 py-2 text-sm text-gray-700 transition-all delay-150 hover:text-gray-900"
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 rounded-lg bg-gray-100"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <span className="relative z-10">{navLink.name}</span>
          </a>
        </Link>
      ))}
    </div>
  );
}`,
      },
    ],
  },
  {
    id: 6,
    title: "Moving Tailwind Card",
    description: "Moving cards on tailwind website",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
    codes: [
      {
          title: "Card Design",
        language: "javascript",
        code: `<div className={\`card-container shadow-lg max-w-lg min-w-lg rounded-b-md rounded-t-md \${Styles.scrollBg} transform rotate-12\`}>
  <div className="top-text p-8">
    <div className="icon-quotes">
      <svg width="45" height="36" class="mb-5 fill-current text-green-300">
        <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
      </svg>
    </div>
    <div className="container-text max-w-lg">
      <p className="font-semibold text-gray-900 text-xl py-8">
        As seen on the tailwild <a href="tailwindcss.com">website</a>, this
        moving testimonial slider is an excellent example of modern UI that
        looks clean.
      </p>
    </div>
  </div>
  <div className="footer-container flex flex-row flex-nowrap justify-between min-w-lg max-w-lg bg-gradient-to-r from-green-400 to-blue-500 py-4 px-8 rounded-b-lg">
    <div className="avatar-container">
      <div className="footer-img flex flex-row flex-nowrap">
        <Image
          src="/avatar.jpg"
          height={60}
          width={60}
          className="border-2 rounded-full border-gray-200"
        />
        <div className="footer-text flex flex-col flex-nowrap">
          <p className="text-gray-100 font-bold ml-6">Manu Arora</p>
          <p className="text-gray-200 ml-6">Software Developer</p>
        </div>
      </div>
    </div>
    <div className="twitter-icon my-auto">
      <a href="https://twitter.com/mannupaaji">
        <svg
          width="33"
          height="32"
          fill="currentColor"
          className="text-gray-100"
        >
          <path d="M32.411 6.584c-1.113.493-2.309.826-3.566.977a6.228 6.228 0 002.73-3.437 12.4 12.4 0 01-3.944 1.506 6.212 6.212 0 00-10.744 4.253c0 .486.056.958.16 1.414a17.638 17.638 0 01-12.802-6.49 6.208 6.208 0 00-.84 3.122 6.212 6.212 0 002.762 5.17 6.197 6.197 0 01-2.813-.777v.08c0 3.01 2.14 5.52 4.983 6.091a6.258 6.258 0 01-2.806.107 6.215 6.215 0 005.803 4.312 12.464 12.464 0 01-7.715 2.66c-.501 0-.996-.03-1.482-.087a17.566 17.566 0 009.52 2.79c11.426 0 17.673-9.463 17.673-17.671 0-.267-.007-.536-.019-.803a12.627 12.627 0 003.098-3.213l.002-.004z"></path>
        </svg>
      </a>
    </div>
  </div>
</div>`,
      },
      {
        title: "Controlling CSS",
      language: "javascript",
      code: `.scrollBg {
  -webkit-animation-name: scrollSmall;
  animation-name: scrollSmall;
  -webkit-animation-duration: 15s;
  animation-duration: 15s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
@-webkit-keyframes scrollSmall {
  0% {
    transform: translateX(0%) translateZ(0px) translateY(0px);
  }

  to {
    transform: translateX(100%) translateZ(0px) translateY(0px);
  }
}

@keyframes scrollSmall {
  0% {
    transform: translateX(0%) translateZ(0px) translateY(0px);
  }

  to {
    transform: translateX(-100%) translateZ(0px) translateY(0px);
  }
}`,
    },
    ],
  },
  {
    id: 7,
    title: "Loader",
    description: "A simple reusable loader in React",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    codes: [
      {
        //   title: "Basic useState Example",
        language: "javascript",
        code: `export default function Loader({ show }) {
  return show ? <div className="loader"></div> : null;
}`,
      },
      {
          title: "/* Loader */",
        language: "javascript",
        code: `.loader {
  border: 10px solid #eef0f1;
  border-top: 10px solid #3b49df;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`,
      },
    ],
  },
  {
    id: 8,
    title: "Keyboard Events",
    description: "A custom Hook for listening to keyboard events.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    codes: [
      {
          title: "useKeyPress.js",
        language: "javascript",
        code: `import React, { useState } from "react";

const useKeyPress = function (targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", downHandler);
    document.addEventListener("keyup", upHandler);

    return () => {
      document.removeEventListener("keydown", downHandler);
      document.removeEventListener("keyup", upHandler);
    };
  });

  return keyPressed;
};

export default useKeyPress;`,
      },
      {
          title: "KeyPress.js",
        language: "javascript",
        code: `import useKeyPress from "@/hooks/useKeyPress";

// Rest of the code...


const enterPress = useKeyPress("Enter");
const ctrlPress = useKeyPress("Control");

useEffect(() => {
    if (enterPress && ctrlPress) {
     // Enter Key and Control Keys pressed together
      domeSomething();
    }
  }, [ctrlPress, enterPress]);

// Rest of the code...`,
      },
    ],
  },
];

export default snippetsData;
