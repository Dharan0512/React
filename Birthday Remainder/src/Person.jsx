const Person = ({name, age, image}) => {
  return (
    <article className="person">
      <img src={image} alt={name} className="img"/>
      <div>
        <h1>{name}</h1>
        <h3>{age} old</h3>
      </div>
    </article>
  )
}

export default Person