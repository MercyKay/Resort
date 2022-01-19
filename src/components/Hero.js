import React from 'react'

export default function Hero ({children,hero}) {
    return (
        <header className={hero}>{children}
            <h2>helloo</h2>
        </header>
    )
}

 
Hero.defaultProps={
    hero:"defaultHero"
};