# My Product - SaaS Landing Page

![App Preview](https://imgix.cosmicjs.com/84cfb7f0-5a38-11f1-93fc-1339ba0f6cad-autopilot-photo-1438761681033-6461ffad8d80-1779933421797.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern SaaS landing page built with Next.js and powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 🚀 Modern, responsive design
- ⚡ Features showcase with icons
- 💳 Pricing tiers with popular highlighting
- 💬 Customer testimonials with star ratings
- ❓ FAQ section organized by category
- 📱 Mobile-first responsive layout
- 🎨 Beautiful gradient hero section
- 🔍 TypeScript for type safety

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a17a08cf2c683f5f2b36c92&clone_repository=6a17a19df2c683f5f2b36cc7)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a SaaS product website with features, pricing tiers, documentation pages, and customer testimonials.
>
> User instructions: A SaaS landing page with features, pricing tiers, FAQ, and testimonials"

### Code Generation Prompt

> Build a Next.js application for an online business called "My Product". The content is managed in Cosmic CMS with the following object types: features, pricing-tiers, faqs, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A SaaS landing page with features, pricing tiers, FAQ, and testimonials

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) - React framework with App Router
- [Cosmic](https://www.cosmicjs.com/docs) - Headless CMS
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Bun](https://bun.sh) - Runtime and package manager

## Getting Started

### Prerequisites

- Bun installed
- Cosmic account with bucket configured

### Installation

1. Install dependencies:
```bash
bun install
```

2. Set up environment variables in `.env.local`:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

3. Run the development server:
```bash
bun run dev
```

## Cosmic SDK Examples

### Fetching Features
```typescript
const response = await cosmic.objects
  .find({ type: 'features' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Pricing Tiers
```typescript
const response = await cosmic.objects
  .find({ type: 'pricing-tiers' })
  .depth(1)
```

## Cosmic CMS Integration

This application integrates with four content types in your Cosmic bucket: features, pricing-tiers, testimonials, and faqs. All content is fetched server-side for optimal performance and SEO.

## Deployment Options

Deploy to [Vercel](https://vercel.com) or [Netlify](https://netlify.com). Set your environment variables in the hosting platform's dashboard.

<!-- README_END -->