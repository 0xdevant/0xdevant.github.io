# My Personal Website

Hey there! Welcome to the codebase for my personal website. This is a fork from Hailey's personal site(https://github.com/heilcheng/heilcheng.github.io) - but I will continuously touch it up while doing some bug-fixing as long as I got some new personal updates to add on :p

## Quick Start

Ready to run it locally?

```bash
pnpm dev
```

This will start the development server at http://localhost:3000.

## Deployment Magic

This portfolio is set up for automatic deployment to GitHub Pages. The workflow in `.github/workflows/deploy.yml` handles everything. Once you've set up your repository, every push to the main branch will automatically trigger the GitHub Action, which will build the site and deploy it to your GitHub Pages URL. Just make sure to add your GitHub PAT as a repository secret named `PERSONAL_ACCESS_TOKEN`.
