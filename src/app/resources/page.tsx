import { Blog7 } from '@/components/blog7'
import React from 'react'

const page = () => {
  return (
    <Blog7 
      tagline='Latest Updates'
      heading='Blog Posts'
      description='Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.'
      buttonText='View all articles'
      buttonUrl='https://shadcnblocks.com'
      posts={[
        {
          id: 'post-1',
          title: 'Getting Started with shadcn/ui Components',
          summary: 'Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We\'ll cover installation, theming, and best practices for building modern interfaces.',
          label: 'Tutorial',
          author: 'Sarah Chen',
          published: '1 Jan 2024',
          url: 'https://shadcnblocks.com',
          image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg'
        },
        {
          id: 'post-2',
          title: 'Building Accessible Web Applications',
          summary: 'Explore how to create inclusive web experiences using shadcn/ui\'s accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.',
          label: 'Accessibility',
          author: 'Marcus Rodriguez',
          published: '1 Jan 2024',
          url: 'https://shadcnblocks.com',
          image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg'
        },
        {
          id: 'post-3',
          title: 'Designing for Performance and SEO',
          summary: 'Learn how to optimize your shadcn/ui components for performance and search engine visibility. We\'ll cover techniques like lazy loading, code splitting, and semantic markup.',
          label: 'Performance',
          author: 'Emily Davis',
          published: '1 Jan 2024',
          url: 'https://shadcnblocks.com',
          image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg'
        },
        {
          id: 'post-4',
          title: 'Creating Custom Themes with shadcn/ui',
          summary: 'Discover how to create and apply custom themes to your shadcn/ui components. We\'ll explore theming best practices and how to maintain a consistent design language across your application.',
          label: 'Theming',
          author: 'David Lee',
          published: '1 Jan 2024',
          url: 'https://shadcnblocks.com',
          image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg'
        },
        {
          id: 'post-5',
          title: 'Integrating shadcn/ui with Design Systems',
          summary: 'Learn how to integrate shadcn/ui components into your existing design system. We\'ll cover component customization, theming, and maintaining design consistency.',
          label: 'Design Systems',
          author: 'Sophia Martinez',
          published: '1 Jan 2024',
          url: 'https://shadcnblocks.com',
          image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg'
        },
        {
          id: 'post-6',
          title: 'Building Responsive Layouts with shadcn/ui',
          summary: 'Explore how to create responsive layouts using shadcn/ui components. We\'ll cover grid systems, flexbox, and best practices for mobile-first design.',
          label: 'Responsive Design',
          author: 'Liam Johnson',
          published: '1 Jan 2024',
          url: 'https://shadcnblocks.com',
          image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg'
        },
      ]}
     />
  )
}

export default page