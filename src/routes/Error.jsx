import {} from 'react'
import errorimg from '../assets/error.svg'
import styles from '../css/error.module.css'

function Error(){
    return(
        <div className={styles.containerErro}>
            <h1>Error 404! :(</h1>
            <p>Página não encontrada...</p>
            <img src={errorimg} alt="" />
        </div>
    )
}
export default Error