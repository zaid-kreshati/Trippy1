import './Card.css'
const Card = ({title, descriptions, image}) => {
  return (
    <div className='card'>
      <div className="cardImg">
        <img src={image} alt="" />
      </div>
      
        <h1>{title}</h1>
        <p>{descriptions}</p>
    </div>
  )
}

export default Card