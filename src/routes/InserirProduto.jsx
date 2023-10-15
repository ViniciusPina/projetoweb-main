import { useState } from 'react';
import { Pratos } from '../components/Pratos';
import { useNavigate } from 'react-router-dom';


function InserirProduto() {
    const navigate = useNavigate();

    let novoId = Pratos[Pratos.length - 1].id + 1;

    const [produto, setProduto] = useState({
        id: novoId,
        nome: '',
        desc: '',
        valor: '',
    });

    

    const handleSubmit = (e) => {
        e.preventDefault();
        Pratos.push(produto);
        navigate('/produtos');
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    return (
        <section>
            <h1>Cadastro de Produtos</h1>
            {/*chando a função handleSubmit dentro do form */}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>PRODUTO</legend>
                    <p>
                        <label htmlFor="idNome"> Nome do Produto:</label>
                        <input
                            type="text"
                            name="nome"
                            id="idNome"

                            value={produto.nome}
                            /*chamando a função handleChange dentro do input */
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <label htmlFor="idDesc">Descrição Produto:</label>
                        <input
                            type="text"
                            name="desc"
                            id="idDesc"

                            value={produto.desc}
                            /*chamando a função handleChange dentro do input */
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <label htmlFor="idValor"> Valor do Produto:</label>
                        <input
                            type="text"
                            name="valor"
                            id="idValor"

                            value={produto.valor}
                            /*chamando a função handleChange dentro do input */
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <button type="submit">
                            CADASTRAR
                        </button>
                    </p>
                </fieldset>
            </form>
        </section>
    );
}
export default InserirProduto;