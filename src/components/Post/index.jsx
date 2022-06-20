import styles from "./styles.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/diego3g.png" className={styles.avatar} />

          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2022-06-14 16:30:00" title="14 de junho ás 16:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera 👋</p>

        <p> Acabei de subir mais um projeto no meu github. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>
          <a href="#">
            👉 jane.design/doctorCare
          </a>
        </p>

        <p>
          <a href="#">
            #novoProjeto #nlw #rocketseat
          </a>
        </p>
      </div>

      <form className={styles.comments}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}