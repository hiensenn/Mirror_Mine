import styles from './DashBoard.module.css'

//hooks
import { Link } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useAuthValue } from '../../context/AuthContext'



const DashBoard = () => {

  const{user} = useAuthValue()
  const uid = user.uid

  //posts do usuario
  const {documents : posts, loading} = useFetchDocuments("posts", null, uid)

  return (
    <div>
        <h1>DashBoard</h1>
        <p>Gerencie os seus posts</p>
        {posts && posts.length === 0 ? (
          <div className={styles.noposts}> <p>Você ainda não postou</p> <Link to='/posts/create' className='btn'>Criar um post</Link></div>
          
        ) : (
          <div className={styles.posts}>
            <p>seus posts : </p>
          </div>
        )}

        {posts && posts.map((post) => <h2 key={post.id}>{post.title}</h2>)}
    </div>
  )
}

export default DashBoard