import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./styles.module.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Guss-droid.png",
      name: "Gustavo Ré",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu github.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "👉 jane.design / doctorCare"},
      { type: "link", content: "#novoProjeto #nlw #rocketseat"}
    ],
    publishedAt: new Date("2022-06-14 13:00:30")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu github.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "👉 jane.design / doctorCare"},
      { type: "link", content: "#novoProjeto #nlw #rocketseat"}
    ],
    publishedAt: new Date("2022-06-20 12:10:30")
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(item => (
            <Post
              author={item?.author}
              key={item?.id}
              publishedAt={item?.publishedAt}
              content={item?.content}
            />
          ))}
        </main>
      </div>
    </>
  )
}