import stroerLogo from "./assets/stroer-logo.svg";
import abbLogo from "./assets/abb-logo.svg";
import sinnerSchraderLogo from "./assets/sinnerschrader-logo.svg";
import glovoLogo from "./assets/glovo-logo.svg";
import manychatLogo from "./assets/manychat-logo.svg";

export const resumeData = {
  name: "Alejandro Rodriguez Segrelles",
  title: "Senior Frontend Engineer",
  summary:
    "Experienced frontend engineer specializing in React, Vue, and TypeScript with a proven track record of building scalable web applications and leading technical initiatives across multiple industries.",
  contact: {
    email: "alejandrorodseg@gmail.com",
    location: "Granada, Spain",
    github: "https://github.com/alrodseg",
    linkedin: "https://linkedin.com/in/alejandrorodseg",
  },
  experience: [
    {
      id: 5,
      company: "Internet Billboard",
      title: "Junior Full-Stack Developer",
      dates: "Oct 2017 - Jan 2018",
      location: "Opava, Czech Republic",
      description:
        "I participated in the development of an unreleased project related to the advertising field. As a junior, my responsibilities were minor, so I focused my efforts on being productive and learning fast. My tasks were bound to Node.js and Angular 4 in Typescript.",
      skills: ["TypeScript", "JavaScript", "Node.js", "Angular"],
      logo: stroerLogo,
    },
    {
      id: 4,
      company: "ABB",
      title: "Software Project Engineer",
      dates: "Jan 2018 - Jan 2019",
      location: "Ostrava, Czech Republic",
      description:
        "I was solely responsible for the Frontend of a Business Intelligence solution based on Microsoft’s Power BI tools. My duties included not only the feature development and maintenance of the platform, but also the production of visually pleasing custom data representations of Key Performance Indicators, which ranged from simple typography to more complex charts and maps.",
      skills: ["JavaScript", "Power BI"],
      logo: abbLogo,
    },
    {
      id: 3,
      company: "SinnerSchrader",
      title: "Frontend Product Engineer",
      dates: "Jan 2019 - Jul 2021",
      location: "Prague, Czech Republic",
      description:
        "I was taking part in the development of several different solutions for well-known large corporate clients while pushing for improved agile processes and product quality. I have been responsible for the maintenance of legacy sites, as well as being involved in the decision-making of starting projects and pushing them from scratch up to production. My main tasks are mostly Frontend specific, but not technology restricted, as every project is tailor-made for the customer’s needs. The domain is also on a per project basis. To elaborate, I've participated in a project with an old LAMP stack for a German telecom company plus its relaunch from scratch with React, a Nuxt project for a German bank, a Vue project for a fast-food company, a React Native application for the Austrian liquor market, a high pressure React project related to the COVID-19 vaccines and a React project for a German automotive company.",
      skills: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next",
        "Vue",
        "Nuxt",
        "React Native",
        "GraphQL",
        "Jest",
        "Cypress",
      ],
      logo: sinnerSchraderLogo,
    },
    {
      id: 2,
      company: "Glovo",
      title: "Frontend Engineer",
      dates: "Aug 2021 - May 2023",
      location: "Barcelona, Spain",
      description:
        "I am actively developing, among other teams, the web application that Glovo partners (restaurants, shops, etc.) use. I was responsible for some initiatives within the project, like decreasing the number of missed sound notifications, implementing the WIP design system, improving observability of certain key features or minimising the request volume of various endpoints. Constant collaboration with designers and data analysts was essential to succeed. Some key technologies related: Vue (TypeScript mostly), state management (Vuex, migrating to Pinia), testing (Jest for unit testing, Cypress for end-to-end and Applitools for visual regression), CI (GitHub Actions for PRs and Jenkins), DataDog (metrics for engineers) and Figma.",
      skills: [
        "TypeScript",
        "Vue",
        "Vuex",
        "Pinia",
        "Jest",
        "Cypress",
        "GitHub Actions",
        "Jenkins",
        "DataDog",
        "Figma",
      ],
      logo: glovoLogo,
    },
    {
      id: 1,
      company: "Manychat",
      title: "Senior Frontend Engineer",
      dates: "May 2023 - Feb 2025",
      location: "Barcelona, Spain",
      description:
        "As a Senior Frontend Engineer, I worked on the WhatsApp automation experience, contributing to significant revenue growth by helping improve the product's usability and accessibility while also implementing new features. Over time, the team's focus shifted to onboarding new users across various channels, including Instagram, Facebook, Telegram, and TikTok. I consistently upheld high standards of code quality, both in my own work and through mentoring and reviewing peers’ contributions across teams. I also took initiative in managing technical debt, not just by implementing improvements, but by researching and documenting them for the backlog. I collaborated closely with designers, product owners, and backend developers to keep up with fast-changing product requirements.",
      skills: [
        "TypeScript",
        "JavaScript",
        "React",
        "Redux",
        "Jest",
        "Svelte",
        "Cypress",
        "Sentry",
        "Figma",
      ],
      logo: manychatLogo,
    },
  ],
  skills: {
    programmingLanguages: [
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        url: "https://www.typescriptlang.org/",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
    frameworks: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        url: "https://react.dev/",
      },
      {
        name: "Redux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
        url: "https://redux.js.org/",
      },
      {
        name: "Next",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        url: "https://nextjs.org/",
      },
      {
        name: "Vue",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        url: "https://vuejs.org/",
      },
      {
        name: "Vuex",
        logo: "https://cdn.worldvectorlogo.com/logos/vuex-1.svg",
        url: "https://vuex.vuejs.org/",
      },
      {
        name: "Pinia",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Pinialogo.svg",
        url: "https://pinia.vuejs.org/",
      },
      {
        name: "Nuxt",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
        url: "https://nuxt.com/",
      },
      {
        name: "Svelte",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
        url: "https://svelte.dev/",
      },
      {
        name: "Angular",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
        url: "https://angular.io/",
      },
    ],
    tools: [
      {
        name: "Storybook",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
        url: "https://storybook.js.org/",
      },
      {
        name: "Jest",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        url: "https://jestjs.io/",
      },
      {
        name: "Cypress",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
        url: "https://www.cypress.io/",
      },
      {
        name: "Webpack",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
        url: "https://webpack.js.org/",
      },
      {
        name: "GraphQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        url: "https://graphql.org/",
      },
      {
        name: "GitHub Actions",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        url: "https://github.com/features/actions",
      },
      {
        name: "Jenkins",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
        url: "https://www.jenkins.io/",
      },
      {
        name: "Figma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        url: "https://www.figma.com/",
      },
      {
        name: "DataDog",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/datadog/datadog-original.svg",
        url: "https://www.datadoghq.com/",
      },
      {
        name: "Sentry",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sentry/sentry-original.svg",
        url: "https://sentry.io/",
      },
    ],
    spokenLanguages: [
      { name: "Spanish (Native)", flag: "🇪🇸" },
      { name: "Valencian (Native)", flag: "🇪🇸" },
      { name: "English (Professional)", flag: "🇬🇧" },
      { name: "Czech (Elemental)", flag: "🇨🇿" },
    ],
  },
  education: [
    {
      degree: "BSc in Informatics Engineering",
      school: "Universitat Politècnica de València",
      location: "Valencia, Spain",
      dates: "2012 - 2017",
      notes:
        "Diploma thesis: Performance analysis of GPU virtualization in low-power systems (10/10 with honors)",
    },
    {
      degree: "Erasmus+ Exchange Programme",
      school: "Politechnika Wrocławska",
      location: "Wrocław, Poland",
      dates: "Oct 2015 - Jun 2016",
    },
  ],
};
