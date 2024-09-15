# Coach Francis Site

This is website created for a talent coach. The Readme is still a work in progress. It will be updated as the project progresses, hence the lack of content and details in regards to connecting to the Ghost CMS.

## Tech Stack

This site is made with Next.js 14, Tailwind CSS, Typescript, and Ghost CMS. GitHub is used for version control. Project is deployed on a private server running Coolify to handle automated builds and deployments.

## Getting Started

To run locally, clone the repo and run the following commands:

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on VPS

The private server used in this project there are 2 servers, on production and one staging having the config of 4GB RAM, 2vCPU, 40GB SSD.

## Deploy Coolify

For this purpose I used Coolify, a open source alternative of Vercel that allows you to deploy your apps to a private server in an automated manner. Its a open source project and you can find the repo [here](https://github.com/coollabsio/coolify). The documentation is also available [here](https://coolify.io/docs/getting-started). After following the instructions i setup a project on Coolify which is connected to this repo. So when i push to the master branch, Coolify will automatically build and deploy the app to the server.
