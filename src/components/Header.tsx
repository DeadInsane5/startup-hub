import React from 'react'
import { Button } from './ui/button'
import { Navbar1 } from './navbar1'
const Header = () => {
    return (
        <>
            <header className="header p-8 flex h-16 items-center justify-between">
                <Navbar1
                    logo={{
                        url: "/",
                        src: "",
                        alt: "logo",
                        title: "Startup-Hub",
                    }}
                    menu={[
                        {
                            title: "Discover",
                            url: "/discover",
                        },
                        {
                            title: "Resources",
                            url: "/resources",
                        },
                        {
                            title: "Community",
                            url: "/community",
                        },
                        {
                            title: "Events",
                            url: "/events",
                        },
                    ]}
                    auth={{
                        login: {
                            title: "Login",
                            url: "/auth/login",
                        },
                        signup: {
                            title: "Sign Up",
                            url: "/auth/register",
                        },
                    }}
                />
            </header>
        </>
    )
}

export default Header