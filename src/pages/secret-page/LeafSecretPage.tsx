import React, { useEffect } from "react";
import { useUserContext } from "../../user/context/UserContext";
import { PokemonType } from "../../enumerators/pokemonType.enum";
import SecretComponent from "./SecretComponent";

const LeafSecret: React.FC = () => {
  const typesList = PokemonType;
  const { secrets, setSecrets } = useUserContext(); 

  let textSecret = '';
  const textSecretType = 'El pokémon tipo planta más poderoso de los 151 originales es Venusaur.'
  const textNewSecret = '¡Has conseguido el secreto tipo planta!';
  const imagePath = "./../../../../assets/images/pokemon/bulbasaur.png";
  
  useEffect(() => {
    if (!secrets.includes(typesList.leaf)) {
      setSecrets([...secrets, typesList.leaf]);
      textSecret = textNewSecret;
    }
  }, []);

  return (
    <SecretComponent
      textSecret={textSecret}
      textSecretType={textSecretType}
      imagePath={imagePath}
    />
  );
};

export default LeafSecret;
