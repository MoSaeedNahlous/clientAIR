import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {

    return (
        <header>
            <nav>
                <Link to='/'>
                    <h3>🔍 Search Engine</h3>
                </Link>
                <div className="nav-list">
                    <Link to='/'>🔍 Boolean Model</Link>
                    <Link to='/extended'>🔍 Extended Boolean Model</Link>
                    <Link to='/vsm'>🔍 VSM</Link>
                    <Link to='/addquestion'>➕ Add Questions</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
