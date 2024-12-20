import styles from './DashBoard.module.css'

//hooks
import { Link } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useAuthValue } from '../../context/AuthContext'
import { useDeleteDocument } from '../../hooks/useDeleteDocument'


const DashBoard = () => {

  const{user} = useAuthValue()
  const uid = user.uid

  //posts do usuario
  const {documents : posts, loading} = useFetchDocuments("posts", null, uid)

  const {deleteDocument } = useDeleteDocument("posts")

  

    if(loading){
      return <p>Carregando...</p>
    }
  

  return (
    <div className={styles.dashboard}>
        <h1>DashBoard</h1>
        <p>Gerencie os seus posts</p>
        {posts && posts.length === 0 ? (
          <div className={styles.noposts}> <p>Você ainda não postou</p> <Link to='/posts/create' className='btn'>Criar um post</Link></div>
          
        ) : (
          <>
          <div className={styles.post_header}>
            <span>Títulos</span>
            <span>Ações</span>
          </div>
          {posts && posts.map((post) => <div key={post.id} className={styles.post_row}>
             <p>{post.title}</p>

            <div>
              <Link to={`/posts/${post.id}`}  className='btn btn-outline'>Ver </Link>
              <Link to={`/posts/edit/${post.id}`}  className='btn btn-outline'>Editar </Link>
              <button onClick={() => deleteDocument(post.id)} className='btn btn-outline'>Excluir</button>
            </div>



              </div>)}</>
        )}

        
    </div>
  )
}

export default DashBoard