import { } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/home.module.css'
import chef from '../assets/chef.svg'
import qualidade from '../assets/qualidade.svg'
import quick from '../assets/quick.svg'

function Home() {
    return(
        <>
            <div className={styles.banner}>
                <div className={styles.bannerTexto}><h1>Bem vindo(a) ao <span>Sakura!</span></h1></div>
            </div>
            <main>
                <section className={styles.secaoHome}>
                    <div className={styles.texto}>
                        <h2>No <span>Sakura!</span></h2>
                        <p>Usamos apenas os melhores igredientes e oferecemos umas atmosfera japonesa única, com elegância e simplicidade, criando um ambiente sofisticado e acolhedor para todos clientes.</p>
                    </div>
                    <div className={styles.icones}>
                        <div className={styles.icone}>
                            <img src={chef} alt="" />
                            <p>Chefs talentosos!</p>
                        </div>
                        <div className={styles.icone}>
                            <img src={qualidade} alt="" />
                            <p>Qualidade inigualável!</p>
                        </div>
                        <div className={styles.icone}>
                            <img src={quick} alt="" />
                            <p>Rápido demais!</p>
                        </div>
                    </div>
                </section>
                <section className={styles.secaoHome}>
                    <div className={styles.texto}>
                        <h3>Faça uma visita!</h3>
                        <p>Estamos localizados na Rua xxxx xx xxxx, Liberdade, xxx.
                            Nosso telefone é (11) 9xxxx-xxxx.
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home