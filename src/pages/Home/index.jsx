import { Link } from 'react-router-dom'
import Header from "../../components/Header"
import Container from '../../components/Container'
import styles from './Home.module.css'

function Home () {
    return (
        <>
            <Header />
            <Container >
                <section className={styles.home_1}>
                    <div className={styles.texts}>
                    <h1>Crie seus vídeos <br /> online</h1>
                    <p>Transforme suas ideias em filmes <br />memoráveis: onde a criatividade <br />encontra a simplicidade.</p>
                    <Link to="/contato" className={`${styles.btn} ${styles.btn_home}`}>
                        Começar agora!
                    </Link>
                    </div>

                    <figure>
                        <img className={styles.img_home} src="/Hero image.png" alt="Exemplo" />
                    </figure>
                </section>

                <section className={styles.home_2}>
                    <div className={styles.cards}>

                        <div className={styles.card_1}>
                        <h1>01</h1>
                        <h2>Youtube</h2>
                        <p>Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.</p>
                        </div>

                        <div className={styles.card_2}>
                        <h1>02</h1>
                        <h2>Tiktok</h2>
                        <p>Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.</p>
                        </div>

                        <div className={styles.card_3}>
                        <h1>03</h1>
                        <h2>Facebook</h2>
                        <p>Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.</p>
                        </div>

                        <div className={styles.card_4}>
                        <h1>04</h1>
                        <h2>Youtube</h2>
                        <p>Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.</p>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default Home