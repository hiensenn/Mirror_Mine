//css
import styles from './Home.module.css'

//hooks
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'


//components


const Home = () => {

  const[query, setQuery] = useState("")
  const[posts] = useState([])

    const handleSubmit = (e) => {
      e.preventeDefault()
    }




  return (
    <div className={styles.home}>
        <h1>Veja os posts mais recentes</h1>
        <form onSubmit={handleSubmit} className={styles.search_form}>
          <input type="text" placeholder='busque por tags #' onChange={(e) => setQuery(e.target.value)}/>

          <button className="btn btn-dark">Pesquisar</button>
        </form >

        <div>
          <h1>Posts</h1>
          {posts && posts.length === 0 && (
            <div className={styles.noposts}>
                <p>Não foram encontrados posts</p>
                <Link to='/posts/create'><h3>criar primeiro post</h3></Link>
            </div>
          )}
        </div>
    </div>
  )
}

export default Home