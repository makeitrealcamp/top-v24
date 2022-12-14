import Link from 'next/link'
import Image from 'next/image'

const Characters = ({ dataRickMorty }) => {

  return (
    <>
      <h1>Personajes</h1>
      {dataRickMorty.results.map((item) => {
        return (
          <Link href={`/characters/${item.id}`} key={item.id}>
            <div >
              <Image
                src={item.image}
                alt="Imagen de rosa"
                width={350}
                height={300}
              />
              {/*               <img

                src={item.image}
                alt={`personaje ${item.name}`}
                loading="lazy"
              /> */}
              <h2>{item.name}</h2>
              <a>Ver detalles</a>
            </div>
          </Link>
        )
      })}
    </>
  )
}


export default Characters

export async function getServerSideProps(context) {
  const apiRickMorty = await fetch(`https://rickandmortyapi.com/api/character`,
    {
      mehtod: "GET"
    }
  )
  const dataRickMorty = await apiRickMorty.json()

  return {
    props: {
      dataRickMorty
    },
  }
}