import React from 'react';
import styles from '../css/sobre.module.css'
import { AiFillGithub } from 'react-icons/ai';

function Sobre() {
    return (
        <div className={styles.containerSobre}>
            <div className={styles.tituloSobre}>
                <h1>Sobre</h1>
                <p>Os desenvolvedores</p>
            </div>
            <p className={styles.textoSobre}>

                Os desenvolvedores optaram por utilizar React e Vite, tecnologias que adquiriram conhecimento durante o curso de engenharia de software, para criar um site com o objetivo principal de estabelecer um e-commerce para um restaurante japonês. Este site foi projetado com a intenção de oferecer todas as funcionalidades essenciais para uma experiência de compras completa
            </p>
            <div className={styles.desenvolvedoresIcones}>
                <div className={styles.desIcon}>
                    <a href=""><AiFillGithub size={80} /></a>
                    <p>Enzo Vasconcelos</p>
                </div>
                <div className={styles.desIcon}>
                    <a href=""><AiFillGithub size={80} /></a>
                    <p>Felipe Hideki</p>
                </div>
                <div className={styles.desIcon}>
                    <a href=""><AiFillGithub size={80} /></a>
                    <p>Pedro Guerra</p>
                </div>
                <div className={styles.desIcon}>
                    <a href=""><AiFillGithub size={80} /></a>
                    <p>Vinicius Pina</p>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
