import React, { useEffect } from "react";
import { useUserContext } from "../../user/context/UserContext";
import { PokemonType } from "../../enumerators/pokemonType.enum";
import SecretComponent from "./SecretComponent";

const FireSecret: React.FC = () => {
  const typesList = PokemonType;
  const { secrets, setSecrets } = useUserContext(); 
  let textSecret = '';
  const textSecretType =
    "El pokémon tipo fuego más poderoso de los 151 originales es Arcanine.";
  const textNewSecret = "¡Has conseguido el secreto tipo fuego!";
  const imagePath = "../../../../assets/images/pokemon/charmander.png";

  useEffect(() => {
    if (!secrets.includes(typesList.fire)) {
      setSecrets([...secrets, typesList.fire]);
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

export default FireSecret;
