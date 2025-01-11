import React, { useEffect, useState } from "react";
import { PokemonType } from "../../enumerators/pokemonType.enum";
import SecretComponent from "./SecretComponent";
import { Texts } from "../../resources/texts";
import { useSecrets } from "../../customHooks/useSecrets";

const LeafSecret: React.FC = () => {
  const typesList = PokemonType;
  const { secrets, addSecret } = useSecrets(); 
   const [ textSecret, setTextSecret ] = useState('');
  
   const { TypeDescription, NewSecret, ImagePath } = Texts.LeafSecret;
  
  
  useEffect(() => {
    if (!secrets.includes(typesList.leaf)) {
      addSecret(typesList.leaf);
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

export default LeafSecret;
