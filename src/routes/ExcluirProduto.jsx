import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Pratos } from '../components/Pratos';

function ExcluirProduto() {
    const { id } = useParams();
    const navigate = useNavigate();

    const recProdutoListaById = Pratos.filter((item) => item.id == id);
    const produto = recProdutoListaById[0];

    const handleExclude = () => {
        const newProdutos = Pratos.filter(item => item.id !== produto.id);

        setPratos(newProdutos);

        navigate('/produtos');
    };

    return (
        <section>
            <h1>Excluir Produto</h1>
            <div>
                <p>Nome: {produto.nome}</p>
                <p>Descrição: {produto.desc}</p>
                <p>Valor: {produto.valor}</p>
            </div>
            <div>
                <button onClick={handleExclude}>
                    EXCLUIR
                </button>
                <button onClick={() => navigate('/produtos')}>
                    CANCELAR
                </button>
            </div>
        </section>
    );
}

export default ExcluirProduto;
