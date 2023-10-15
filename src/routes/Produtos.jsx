import { } from 'react'
import { Pratos } from '../components/Pratos'
import { Link, useNavigate } from 'react-router-dom';
import EditarProduto from './EditarProduto';
import ExcluirProduto from './ExcluirProduto';
import { GrFormEdit as EditarProdutos} from 'react-icons/gr'
import { RiDeleteBin2Fill as ExcluirProdutos} from 'react-icons/ri'
import styles from '../css/produtos.module.css'
function Produtos() {
    return (
        <section>
            <h1>LISTA DE PRODUTOS</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>DESCRIÇÃO</th>
                            <th>PREÇO</th>
                            <th>EDITAR / EXCLUIR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Pegando as informacoes de todos os elementos do array*/}
                        {Pratos.map((item, indice) => (
                            <tr key={indice}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.desc}</td>
                                <td>{item.valor}</td>
                                <td>
                                    {' '}
                                    {/*Link para chamar a tela de editar produtos */}
                                    <Link to={`/editarproduto/produtos/${item.id}`}>
                                        <EditarProdutos />
                                    </Link>{' '}
                                    | {/*Link para chamar a tela de excluir produtos */}
                                    <Link to={`/excluirproduto/produtos/${item.id}`}>
                                        <ExcluirProdutos />
                                        {/*espaço entre os links '' */}
                                    </Link>{' '}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default Produtos 