import { Trash, ThumbsUp } from "phosphor-react"
import { Avatar } from "../Avatar"

import styles from "./styles.module.css"

export function Comment({ content, removeComment }) {

  function handleRemoveComment() {
    removeComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorInfos}>
              <strong>Mayk Brito</strong>

              <time dateTime="2022-06-14 16:30:00" title="14 de junho ás 16:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="deletar comentário" onClick={handleRemoveComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}