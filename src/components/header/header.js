import React from 'react'
import './header.css'

function Header() {
    return (
        <header className="header">
            <div className="header__info">
                <div className="header__personal-info">
                    <h1>VLAD MIHAI IONESCU</h1>
                </div>
                <div className="header__info--after"/>
            </div>
            <div className="header__photo-container"/>
        </header>
    )
}

export default Header
