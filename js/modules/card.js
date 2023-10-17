const card = () => {
  const localPokemon = document.getElementById("localPokemon");
  const remotePokemon = document.getElementById("remotePokemon");

  const fetchData = async () => {
    try {
        const response =await fetch(endpoint);
        const data= await response.json();
        return data
    } catch (error) {
        console.log(error);        
    }finally {
        console.log('fin de data fetching');
    } 
  };
    const [localPokemonData,remotePokemonData] = await Promise.all([
        fetchData('./json/pokemon-151.json'), fetchData(`http://pokeapi.co/api/v2/pokemon/${~~(math.random()* 151 +1)}`)]);

    console.log(localPokemonData);
    console.log(remotePokemonData);
    
    
};

export default card;    
