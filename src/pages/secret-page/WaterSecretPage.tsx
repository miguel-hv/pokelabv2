import React, { useEffect, useState } from "react";
import { PokemonType } from "../../enumerators/pokemonType.enum";
import SecretComponent from "./SecretComponent";
import { Texts } from "../../resources/texts";
import { useSecrets } from "../../customHooks/useSecrets";

const WaterSecret: React.FC = () => {
  const typesList = PokemonType;
  const { secrets, addSecret } = useSecrets(); 

 const { TypeDescription, NewSecret, ImagePath } = Texts.WaterSecret;
 const [ textSecret, setTextSecret ] = useState('');

  useEffect(() => {
    if (!secrets.includes(typesList.water)) {
      addSecret(typesList.water);
      setTextSecret(NewSecret);
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

export default WaterSecret;
