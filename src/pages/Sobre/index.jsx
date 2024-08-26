import Container from '../../components/Container'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import styles from './Sobre.module.css'

function Sobre() {
    return (
        <>
            <Header />
            <Container>
            <section className={styles.sobre_1}>
                    <div className={styles.textos}>
                    <h1>Bem-vindo à <br />revolução dos <br />vídeos!</h1>
                    <p>Somos uma startup com o objetivo de facilitar <br />a produção de conteúdo em larga escala com <br />qualidade profissional, capaz de atingir uma <br />audiência de milhões de seguidores.</p>
                    <Link to="/contato" className={`${styles.btn} ${styles.btn_sobre}`}>
                        Baixe o app
                    </Link>
                    </div>

                    <figure>
                        <img className={styles.img_sobre_1} src="/phoneOne.png" alt="Exemplo" />
                        <img className={styles.img_sobre_2} src="/phoneTwo.png" alt="Exemplo" />
                    </figure>
                </section>

                <section className={styles.sobre_2}>
                    <h1>
                        Planos
                    </h1>
                    <div className={styles.planos}>
                        <div className={styles.plano_1}>
                            <div className={styles.plano_1_top}>
                                <h2>Indiviual</h2>
                            </div>
                            <p>1 Usuário</p>
                            <div className={styles.seletor}>
                                <select name="qntd" className={styles.required}>
                                    <option value="">10 vídeos R$15</option>
                                    <option value="">15 vídeos R$25</option>
                                    <option value="">30 vídeos R$50</option>
                                </select>
                            </div>
                            <div className={styles.botao_sobre_1}>
                                <button className={`${styles.botao} ${styles.botao_1}`}>Cadastrar</button>
                            </div>
                        </div>

                        <div className={styles.plano_2}>
                            <div className={styles.plano_2_top}>
                                <h2>Profissional - Times</h2>
                            </div>
                            <p>1-10 Usuários</p>
                            <div className={styles.seletor}>
                                <select name="qntd" className={styles.required}>
                                    <option value="">Vídeos ilimitados R$40</option>
                                </select>
                            </div>
                            <p>10+ Usuários</p>
                            <div className={styles.seletor}>
                                <select name="qntd" className={styles.required}>
                                    <option value="">Vídeos ilimitados R$20</option>
                                </select>
                            </div>
                            <div className={styles.botao_sobre_2}>
                                <button className={`${styles.botao} ${styles.botao_2}`}>Cadastrar</button>
                            </div>
                        </div>

                        <div className={styles.plano_3}>
                            <div className={styles.plano_3_top}>
                                <h2>Corporativo</h2>
                            </div>

                            <figure>
                                <img className={styles.img_sobre_3} src="/corporativo.png" alt="Exemplo" />
                            </figure>
                            
                            <div className={styles.botao_sobre_3}>
                                <button className={`${styles.botao} ${styles.botao_3}`}>Entre em contato</button>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default Sobre