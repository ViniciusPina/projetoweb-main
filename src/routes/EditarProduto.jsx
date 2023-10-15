import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Pratos } from '../components/Pratos';

function EditarProduto() {
    const { id } = useParams();
    const navigate = useNavigate();

    const recProdutoListaById = Pratos.filter((item) => item.id == id);
    if (recProdutoListaById.length === 0) {
        
        navigate('/produtos');
        return null;
    }

    const produto = recProdutoListaById[0];

    const [produtoAtualizado, setProdutoAtualizado] = useState({ ...produto });

    const handleSubmit = (event) => {
        event.preventDefault();
        let indice;
        Pratos.forEach((item, index) => {
            if (item.id == produto.id) {
                indice = index;
            }
        });
        Pratos.splice(indice, 1, produtoAtualizado);
        navigate('/produtos');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProdutoAtualizado({ ...produtoAtualizado, [name]: value });
    };

    return (
        <section>
            <h1>EDITAR PRODUTO</h1>
            {/* Chamando a função handleSubmit dentro do form */}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>PRODUTO SELECIONADO</legend>
                    <div>
                        <input
                            type="hidden"
                            name="id"
                            value={produtoAtualizado.id}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="idNome">Nome do Produto:</label>
                        <input
                            type="text"
                            name="nome"
                            id="idNome"
                            value={produtoAtualizado.nome}
                            /* Chamando a função handleChange dentro do input */
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="idDesc">Descrição do Produto:</label>
                        <input
                            type="text"
                            name="desc"
                            id="idDesc"
                            value={produtoAtualizado.desc}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="idValor">Valor do Produto:</label>
                        <input
                            type="text"
                            name="valor"
                            id="idValor"
                            value={produtoAtualizado.valor}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">EDITAR</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
}

export default EditarProduto;
