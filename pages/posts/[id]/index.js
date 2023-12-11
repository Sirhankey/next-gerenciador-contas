import Link from 'next/link';
import { useRouter } from 'next/router'

function Post() {
  const router = useRouter();

  return <div>
    Id do post:
    {router.query.id}
    <ul>
      <img src="/images/avatar.jpg" alt="avatar" />
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href={`/posts/${router.query.id}/comentarios`}>Ir para o comentario do post</Link>
      </li>
    </ul>
  </div>
}

export default Post
