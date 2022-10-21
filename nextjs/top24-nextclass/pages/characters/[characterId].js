import { useRouter } from "next/router"
import { useEffect } from "react"

const CharactersId = ({ characterRickMorty }) => {
  const router = useRouter()

  useEffect(() => {
    const redirect = () => {
      router.push({
        pathname: "/home"
      })
    }

    const timeRedirect = setTimeout(redirect, 5000);

    return (
      () => clearTimeout(timeRedirect)
    )
  }, [])

  return (
    <>
      <h1>Detalle del personaje</h1>
      <div key={characterRickMorty.id}>
        <img
          src={characterRickMorty.image}
          alt={`personaje ${characterRickMorty.name}`}
          loading="lazy"
        />
        <h2>{characterRickMorty.name}</h2>
        <p>{characterRickMorty.species}</p>
        <p>{characterRickMorty.gender}</p>
      </div>
    </>
  )
}

export default CharactersId

export async function getServerSideProps({ params }) {
  const apiRickMorty = await fetch(`https://rickandmortyapi.com/api/character/${params.characterId}`, {
    method: "GET"
  })
  const characterRickMorty = await apiRickMorty.json()

  return {
    props: {
      characterRickMorty
    }, // will be passed to the page component as props
  }
}