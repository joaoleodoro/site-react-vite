import Header from '../../components/Header'
import Container from '../../components/Container'
import styles from './page404.module.css'

function Page404 () {
    return (
        <>
        <Header />
        <Container>
            <h1 className={styles.msg1}>Algo de errado não está certo :(</h1>
            <div className={styles.textos}>
                <h2 className={styles.erro}>404</h2> <br />
                <h3 className={styles.msg2}>Página não localizada!</h3>
            </div>
        </Container>
        </>
    )
}

export default Page404