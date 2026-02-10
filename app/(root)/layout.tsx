import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <p> navbar from root route group</p>
            {children}
        </div>
    )
}

export default Layout