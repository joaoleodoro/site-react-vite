import Container from '../../components/Container'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import styles from './Contato.module.css'

function Contato() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.contato}>
                    <div className={styles.elementos_1}>
                        <h1>
                        Dúvidas e <br />
                        suporte, entre <br />
                        em contato:
                        </h1>
                        
                        <div className={styles.links}>
                            <a href='https:/instagram.com/joaoleodoroo' className={styles.link1}>
                            <img src="/instagram.png" alt="instagram" />
                            </a>
                            <a href='https://github.com/joaoleodoro' className={styles.link2}>
                            <img src="/github.png" alt="github" />
                            </a>
                            <a href='https://www.linkedin.com/in/joaoleodoro/' className={styles.link3}>
                            <img src="/linkedin.png" alt="linked in" />
                            </a>
                        </div>
                    </div>
                    <div id={styles.vertical}></div>
                    <div className={styles.caixas}>
                        <div className={styles.caixa1}>
                            <p>Nome:</p>
                            <input type="text" className={styles.input1}></input>
                        </div>
                        <div className={styles.caixa2}>
                            <p>E-mail:</p>
                            <input type="text" className={styles.input2}></input>
                        </div>
                        <div className={styles.caixa3}>
                            <p>Mensagem:</p>
                            <input type="text" className={styles.input3}></input>
                        </div>
                        <div className={styles.bt}>
                            <button>Enviar</button>
                        </div>
                        
                    </div>
                </section>
            </Container>
        </>
    )
}

export default Contato