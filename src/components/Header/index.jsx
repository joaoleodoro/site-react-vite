import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header () {
    return (
        <header className={styles.header}>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/contato'>Contato</Link>
            </nav>
        </header>
    )
}

export default Header