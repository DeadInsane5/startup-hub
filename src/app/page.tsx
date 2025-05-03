import Header from '@/components/Header'
import { Hero1 } from '@/components/hero1'
import React from 'react'

const page = () => {
  return (
    <>
    <Hero1 badge='' heading='Connect Startups with Investors & Customers' description='The platform where innovative startups meet their audience, investors find opportunities, and ideas become reality.' buttons={{ primary: {text: "Register as Startup", url: "/auth/register"}, secondary: {text: "Register as Customer", url:"/auth/register"}}} image={{ src: 'https://images.unsplash.com/photo-1555209183-8facf96a4349?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: '' }}/>
    </>
  )
}

export default page