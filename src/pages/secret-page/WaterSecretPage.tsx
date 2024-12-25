import React, { useEffect } from "react";
import { useUserContext } from "../../user/context/UserContext";
import { PokemonType } from "../../enumerators/pokemonType.enum";
import SecretComponent from "./SecretComponent";

const WaterSecret: React.FC = () => {
  const typesList = PokemonType;
  const { secrets, setSecrets } = useUserContext(); 
  const textSecretType = 'El pokémon tipo agua más poderoso de los 151 originales es Lapras.'
  const textNewSecret = '¡Has conseguido el secreto tipo agua!';
  const imagePath = "./../../../../assets/images/pokemon/squirtle.png";

  useEffect(() => {
    if (!secrets.includes(typesList.water)) {
      setSecrets([...secrets, typesList.water]);
    }
  }, []);

  return (
    <SecretComponent
      textSecret={textNewSecret}
      textSecretType={textSecretType}
      imagePath={imagePath}
    />
  );
};

export default WaterSecret;
