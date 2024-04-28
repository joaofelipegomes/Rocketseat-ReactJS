import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import coverImage from '../assets/cover.jpg'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={coverImage} alt=""></img>

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/59702396?v=4" />
        <strong>João Gomes</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
