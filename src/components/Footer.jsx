import { } from 'react'
import styles from '../css/footer.module.css'
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
    return (
        <footer>
            <div className={styles.rodapeContainer}>
                <p>SAKURA™ 2023, todos os direitos reservados.</p>
                <ul>
                    <AiFillGithub size={30}/>
                </ul>
            </div>
        </footer>
    )
}
export default Footer