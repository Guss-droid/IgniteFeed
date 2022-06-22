import { Trash, ThumbsUp } from "phosphor-react"
import { useState } from "react"
import { Avatar } from "../Avatar"

import styles from "./styles.module.css"

export function Comment({ content, removeComment }) {

  const [likeCount, setLikeCount] = useState(0)

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
          <button onClick={() => setLikeCount(likeCount + 1)}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}