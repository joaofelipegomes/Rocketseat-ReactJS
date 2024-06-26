import { Post } from './components/Post'
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/59702396?v=4',
      name: 'João Gomes',
      role: 'CTO @Pila'
    },
    content: [
      { id: 11, type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { id: 12, type: 'paragraph', content: 'Nemo optio ex architecto odio sapiente, quasi porro placeat vitae esse nesciunt eaque expedita, numquam ducimus quae odit ipsa similique minima. Odit.' },
      { id: 13, type: 'link', content: 'joao.design/me' },
    ],
    publishedAt: new Date('2024-04-25 04:01:23')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/59702396?v=4',
      name: 'Marco Santana',
      role: 'CTO @Pila'
    },
    content: [
      { id: 21, type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { id: 22, type: 'paragraph', content: 'Nemo optio ex architecto odio sapiente, quasi porro placeat vitae esse nesciunt eaque expedita, numquam ducimus quae odit ipsa similique minima. Odit.' },
      { id: 23, type: 'link', content: 'joao.design/me' },
    ],
    publishedAt: new Date('2024-04-24 04:01:23')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>

  )
}

