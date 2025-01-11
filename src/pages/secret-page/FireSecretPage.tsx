import React, { useEffect } from "react";
import { PokemonType } from "../../enumerators/pokemonType.enum";
import SecretComponent from "./SecretComponent";
import { Texts } from "../../resources/texts";
import { useSecrets } from "../../customHooks/useSecrets";

const FireSecret: React.FC = () => {
  const typesList = PokemonType;
  const { secrets, addSecret } = useSecrets(); 
  
  let textSecret = '';
  const { TypeDescription, NewSecret, ImagePath } = Texts.FireSecret;

  useEffect(() => {
    if (!secrets.includes(typesList.fire)) {
      addSecret(typesList.fire);
      textSecret = NewSecret;
    }
  }, []);

  return (
    <SecretComponent
      textSecret={textSecret}
      textSecretType={TypeDescription}
      imagePath={ImagePath}
    />
  );
};

export default FireSecret;
