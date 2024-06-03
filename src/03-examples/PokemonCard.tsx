interface IPokemonCard {
    id: number;
    name: string;
    sprites: string[];
}

export const PokemonCard = ({ id, name, sprites = []}: IPokemonCard) => {

  return (
    <section>
        <h2 className="text-capitalize">#{id} - {name}</h2>

        {/* imagenes */}
        <div>
            {
                sprites.map((sprite) => (
                    <img key={sprite} src={sprite} alt={name} />
                ))
            }
            
        </div>
    </section>
  )
}
