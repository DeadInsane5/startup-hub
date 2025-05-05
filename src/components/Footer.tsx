import { RocketIcon } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-between items-center p-4'>
            <div className="left flex items-center gap-2">
                <RocketIcon className="size-5 text-primary" />
                <div className="name">
                    <h1 className="text-xl font-bold text-primary">Startup-Hub</h1>
                </div>
                <div className="rights">
                    <p className="text-sm text-muted-foreground">© 2023 Startup-Hub. All rights reserved.</p>
                </div>
            </div>
            <div className="right">
                <div className="misc px-2 flex gap-4">
                    <a href="/about" className="about text-base text-muted-foreground hover:underline">About</a>
                    <a href="/privacy" className="privacy text-base text-muted-foreground hover:underline">Privacy</a>
                    <a href="/terms" className="terms text-base text-muted-foreground hover:underline">Terms</a>
                    <a href="/contact" className="contact text-base text-muted-foreground hover:underline">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Footer