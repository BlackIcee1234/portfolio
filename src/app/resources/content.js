import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Axel Andree",
  lastName: "Perez Reyes",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Web Developer",
  avatar: "/images/axel.jpg",
  location: "America/Mexico_City",
  languages: ["Spanish", "English"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about web development, technology, and share insights about full-stack development
      and software engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/BlackIcee1234",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/axel-andree/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:andreereyes0@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Web Developer</>,
  subline: (
    <>
      I'm Axel, a Full Stack Web Developer at <InlineCode>Nostum Technologies</InlineCode>, where I build
      <br /> robust and scalable web applications.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from Mexico City`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Full Stack Web Developer with expertise in building modern web applications.
        My work focuses on creating efficient, scalable, and user-friendly solutions using
        cutting-edge technologies and best practices in software development.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Nostum Technologies",
        location: "Guadalajara, Jalisco",
        timeframe: "April 2022 - Present",
        role: "Full Stack Web Developer",
        achievements: [
          <>
            <strong>Video Licensing Store</strong>
            <br />
            Developed RESTful API with Node.js (v20), Express.js (v4) using modular architecture (Controller-Service-Model). Integrated
            GraphQL with Apollo Server for data querying. Built frontend with React (v18), Next.js (v14) using SSR/SSG, custom hooks,
            and Redux Toolkit. Designed custom components for licensed videos with search and filter. Secured API with JWT and Joi for
            validation. Enforced type safety with TypeScript (v5), optimized with useMemo and PropTypes.
          </>,
          <>
            <strong>Business Management App (Flutter + Next.js Dashboard + E-commerce Template)</strong>
            <br />
            Built a POS-style mobile app with Flutter (v3) and Dart, Clean Architecture for managing products, services, sales, and reports.
            Integrated Supabase (Edge Functions, SQL, webhooks) and Conekta for payments. Used Mixpanel & Smartlook for analytics,
            and push notifications. Developed Next.js (v14) dashboard for user stats and platform control. Created reusable e-commerce
            template for users to sell products online with sales reports and date filters.
          </>,
          <>
            <strong>Shopify App – Automatic Discounts</strong>
            <br />
            Developed a custom Shopify app using Remix.js (v2), TypeScript (v5), React (v18) for dynamic components. Integrated Shopify
            App Bridge for navigation and Polaris for UI. Implemented multi-layered discount logic with Shopify Admin API and Discount
            API. Created custom components and hooks, used Prisma ORM for session management, GraphQL for data fetching.
            Deployed on Vercel with Vite, utilized webhooks and integrated with Slack for notifications.
          </>,
          <>
            <strong>Company Blog Website</strong>
            <br />
            Developed CMS-powered blog with React (v18), TypeScript (v5), Next.js (v14), Tailwind CSS, and Sanity.io for content
            management. Built Next.js admin dashboard for blog post management. Designed landing page showcasing services and team
            with modern design, dynamic animations using Intersection Observer API. Focused on performance with Next.js and Vercel for
            fast deployment and loading times.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Centro de Enseñanza Técnica Industrial Plantel Colomos",
        location: "Guadalajara, Jalisco",
        degree: "Bachelor's Degree in Software Development Engineering",
        timeframe: "August 2020 – July 2024",
      },
      {
        name: "Centro de Enseñanza Técnica Industrial Plantel Tonalá",
        location: "Tonalá, Jalisco",
        degree: "Software Development Technologist",
        timeframe: "August 2016 – July 2020",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages and Tools",
        description: <>JavaScript, TypeScript, Java, C, C#, C++, HTML, CSS, GraphQL, SQL, Liquid, React, NextJS, NestJS, Express.js, Angular, Express, NodeJS, Serverless, Apollo(Client/Server).</>,
        images: [],
      },
      {
        title: "Databases and Tools",
        description: <>MongoDB, PostgreSQL, MySQL, SQLite, Firebase, Prisma, Supabase (Edge functions, Migrations, Auth).</>,
        images: [],
      },
      {
        title: "Amazon Web Services",
        description: <>EC2, Lambda, IAM, API Gateway, S3.</>,
        images: [],
      },
      {
        title: "Others",
        description: <>Docker, Shopify, Android Studio.</>,
        images: [],
      },
    ],
  },
};

export { person, social, newsletter, home, about };
