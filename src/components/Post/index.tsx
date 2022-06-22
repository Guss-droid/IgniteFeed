import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"

import { Avatar } from "../Avatar"
import { Comment } from "../Comment"

import styles from "./styles.module.css"

interface IAuthor {
  name: string;
  role: string;
  avatarUrl: string;
}

interface IContent {
  type: string;
  content: string;
}

interface IPost {
  author: IAuthor;
  publishedAt: Date;
  content: IContent[];
}

export function Post({ author, publishedAt, content }: IPost) {

  const [comments, setComments] = useState(["Post legal"])
  const [newCommentText, setNewCommentText] = useState("")

  const formatDatePublished = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleAddComment(e: FormEvent) {
    e.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText("")
  }

  function handleCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("")
    setNewCommentText(e.target.value)
  }

  function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("Esse campo é obrigatório!")
  }

  function removeComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author?.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author?.name}</strong>
            <span>{author?.role}</span>
          </div>
        </div>

        <time dateTime={publishedAt.toISOString()} title={formatDatePublished}>
          {publishedDateToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === "paragraph") {
            return <p key={line?.content}>{line?.content}</p>
          } else if (line.type === "link") {
            return <p key={line?.content}><a href="#">{line?.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleAddComment} className={styles.comments}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={!newCommentText}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentsList}>
        {comments.map(item => (
          <Comment
            key={item}
            content={item}
            removeComment={removeComment}
          />
        ))}
      </div>
    </article>
  )
}