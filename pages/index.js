import NextLink from 'next/link';
import { Box, Text, Image, Icon } from '@skynexui/components';
import dados from '../dados.json';
import dados_ from '../contas_mock.json';
import FontAwesomeIcons from '../utils/fontAwesomeIcons';


export default function HomeScreen() {
  const infos = {
    nome: 'Daniel Guimaraes',
    githubUser: 'sirhankey',
  }
  const posts = dados.posts;
  const contas = dados_.contas;

  return (
    <Box
      styleSheet={{
        flexDirection: 'column',
        margin: '32px auto',
        maxWidth: '800px',
        paddingHorizontal: '16px',
      }}
    >
      <Image
        src={`https://github.com/${infos.githubUser}.png`}
        styleSheet={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          margin: '0 auto',
          border: '2px solid #F9703E',
        }}
      />
      <Text
        variant="heading1"
        tag="h1"
        styleSheet={{ color: '#F9703E', justifyContent: 'center' }}
      >
        {infos.nome}
      </Text>

      <Box styleSheet={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        marginTop: '16px',
        gridGap: '16px',
      }}>

        {contas.map(({ id, titulo, vencimento, grupo, pagamento }) => (
          <Conta
            key={id}
            titulo={titulo}
            id={id}
            vencimento={vencimento}
            grupo={grupo}
            pagamento={pagamento ? 'Pago' : 'Não pago'}
          />
        ))}
        {/* {posts.map(({ title, content, id }) => (
          <Post key={id} title={title} content={content} id={id} />
        ))} */}
      </Box>
    </Box>
  )
}

function Conta({ id, titulo, vencimento, grupo, pagamento }) {

  const fontAwesomeIcons = new FontAwesomeIcons();

  return (
    <Box
      styleSheet={{

        flexDirection: 'column',
        border: '1px solid #F9703E',
        padding: '16px',
        boxShadow: '1px 1px 5px 0 rgba(255,69,0,0.2)',
        transition: '.3s',
        borderRadius: '4px',
        hover: {
          boxShadow: '1px 1px 5px 5px rgba(255,69,0,0.2)',
        }
      }}
    >
      <NextLink href={`contas/${id}`} passHref>
        <Text
          tag="a"
          variant="heading4"
          styleSheet={{ display: ' block', color: '#F9703E', marginBottom: '8px' }}
        >
          {titulo}
        </Text>
      </NextLink>
      <Text>
        {vencimento}
      </Text>
      <i className={fontAwesomeIcons.getIconByGroup(grupo)}></i>
      <Text>
        {pagamento}
      </Text>
    </Box>
  );
}

function Post({ title, content, id }) {
  return (
    <Box
      styleSheet={{
        flexDirection: 'column',
        border: '1px solid #F9703E',
        padding: '16px',
        boxShadow: '1px 1px 5px 0 rgba(255,69,0,0.2)',
        transition: '.3s',
        borderRadius: '4px',
        hover: {
          boxShadow: '1px 1px 5px 5px rgba(255,69,0,0.2)',
        }
      }}
    >
      <NextLink href={`posts/${id}`} passHref>
        <Text
          tag="a"
          variant="heading4"
          styleSheet={{ display: ' block', color: '#F9703E', marginBottom: '8px' }}
        >
          {title}
        </Text>
      </NextLink>
      <Text>
        {content.substring(0, 140)}...
      </Text>
    </Box>
  );
}
