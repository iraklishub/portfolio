import {
  fintech,
  blockchain,
  web3,
  nordic,
  sorvella,
  elixir,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  figma,
  nextjs,
  postman,
  solidity,
  cars,
  onlinestore,
  santaapp
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const services = [
  {
    title: 'Web Development',
    icon: web
  },
  {
    title: 'Web3',
    icon: web3
  },
  {
    title: 'BlockChain',
    icon: blockchain
  },
  {
    title: 'FinTech',
    icon: fintech
  }
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Next JS',
    icon: nextjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Postman',
    icon: postman
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'figma',
    icon: figma
  },
  {
    name: 'Solidity',
    icon: solidity
  }
]

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Nordic (nordiccar.com)',
    icon: nordic,
    iconBg: '#000',
    date: 'September 2021 - May 2023',
    points: [
      'Developing and maintaining web project using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Assistant Manager / Accountant',
    company_name: 'Sorvella',
    icon: sorvella,
    iconBg: '#3e3f40',
    date: 'Jun 2020 - Dec 2020',
    points: [
      'Managing accounting processes for purchases, distribution, and sales control.',
      'Overseeing stock control to optimize inventory levels and meet demand.',
      'Generating financial reports to support informed decision-making.',
      'Distributing products to stands from stock to enhance visibility and sales opportunities.'
    ]
  },
  {
    title: 'Assistant Accountant',
    company_name: 'Elixir',
    icon: elixir,
    iconBg: '#42a4f5',
    date: 'Jan 2020 - May 2020',
    points: [
      'Generating and managing invoices for products or services rendered.',
      'Preparing documents required by revenue services for compliance purposes.',
      'Handling money transfers for various transactions and payments.',
      'Managing bonuses, salaries, and related tax obligations for employees.',
      'Accounting for production, procurement, and sales activities to track financial transactions.',
      "Generating financial reports to provide insights into the company's financial performance.",
      'Conducting stock control to optimize inventory levels and meet demand efficiently.'
    ]
  }
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
]

const projects = [
  {
    name: 'Vintage Auto',
    description:
      'webpage with image carousel of cars, service cards, with cool animations and contact section',
    tags: [
      {
        name: 'HTML5',
        color: 'text-orange-500'
      },
      {
        name: 'CSS3',
        color: 'text-sky-600'
      },
      {
        name: 'JavaScript',
        color: 'text-yellow-500'
      }
    ],
    image: cars,
    source_code_link: 'https://github.com/iraklishub/cars',
    live_link: 'https://iraklishub.github.io/cars/'
  },
  {
    name: 'Online Store',
    description:
      'online store website with Auth, add to favorites/cart functionalities, homepage, products page with filters',
    tags: [
      {
        name: 'NextJS',
        color: 'text-slate-500'
      },
      {
        name: 'ReduxToolkit',
        color: 'text-violet-500'
      },
      {
        name: 'TailwindCSS',
        color: 'text-sky-600'
      }
    ],
    image: onlinestore,
    source_code_link: 'https://github.com/iraklishub/onlinestore',
    live_link: 'https://nextstoretest.vercel.app'
  },
  {
    name: 'Santa WebApp',
    description:
      'Christmas themed webApp, with games, market and letter sending service, with language switcher and beautiful animations',
    tags: [
      {
        name: 'NextJS',
        color: 'text-slate-500'
      },
      {
        name: 'ReactEmail',
        color: 'text-cyan-500'
      },
      {
        name: 'LottieReact',
        color: 'text-teal-400'
      },
      {
        name: 'TailwindCSS',
        color: 'text-sky-600'
      }
    ],
    image: santaapp,
    source_code_link: 'https://github.com/iraklishub/',
    live_link: 'https://santababu.vercel.app/'
  }
]

export { services, technologies, experiences, testimonials, projects }
