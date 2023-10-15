import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/pedido.module.css';
import EditarPedido from './EditarPedido';  // Importe o componente EditarPedido

function Pedido() {
    const [carrinho, setCarrinho] = useState([]);
    const [produtosEscolhidos, setProdutosEscolhidos] = useState([]);
    const [mensagem, setMensagem] = useState('');

    function renderProduct(src, alt, price) {
        const produto = { src, alt, price };

        const adicionarAoCarrinho = () => {
            setCarrinho([...carrinho, produto]);
            setProdutosEscolhidos([...produtosEscolhidos, produto]);
            setMensagem(`Produto adicionado com sucesso: ${alt}`);

            // Limpar a mensagem após algum tempo (por exemplo, 3 segundos)
            setTimeout(() => {
                setMensagem('');
            }, 3000);
        };

        return (
            <div className={styles.imageContainer}>
                <Link to="/">
                    <img src={src} alt={alt} className="image" onClick={adicionarAoCarrinho} />
                </Link>
                <span>{price}</span>
                <button className={styles.adicionarAoCarrinho} onClick={adicionarAoCarrinho}>
                    Adicionar ao Carrinho
                </button>
            </div>
        );
    }

    return (
        <div className={styles.containerComidas}>
            <div className={styles.cardapioTitulo}>
                <h1>Cardápio</h1>
                <p>Fazer um Pedido</p>
            </div>
            <div className={styles.pedidosFlex}>
                <div className={styles.pedidosGrid}>
                {renderProduct("/src/assets/img1.jpg", "Image 1", "$10.99")}
                    {renderProduct("/src/assets/imagem2.jpg", "Image 2", "$12.99")}
                    {renderProduct("/src/assets/imagem3.webp", "Image 3", "$9.99")}
                    {renderProduct("/src/assets/peixe-cru.jpg", "Image 4", "$14.99")}
                    {renderProduct("/src/assets/ramen.jpg", "Image 5", "$8.99")}
                    {renderProduct("/src/assets/tofu.jpg", "Image 6", "$11.99")}
                    {renderProduct("/src/assets/file.webp", "Image 7", "$7.99")}
                    {renderProduct("/src/assets/meguro.jpg", "Image 8", "$13.99")}
                </div>
            </div>

            {mensagem && (
                <div className={styles.mensagem}>
                    {mensagem}
                </div>
            )}

            <div>
                <h2>Produtos Escolhidos</h2>
                <ul>
                    {produtosEscolhidos.map((produto, index) => (
                        <li key={index}>{produto.alt} - {produto.price}</li>
                    ))}
                </ul>
            </div>
            
            <EditarPedido produtosEscolhidos={produtosEscolhidos} />  
        </div>
    );
}

export default Pedido;
