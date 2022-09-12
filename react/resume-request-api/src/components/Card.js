import './CardStyles.css'

const Card = ({ gif }) => {


  return (
    <div className="gif-card">
      <h2>{gif.title}</h2>
      <img src={gif.images.downsized_large.url} alt={`gif ${gif.title}`} loading="lazy" />
    </div>
  )
}

export default Card