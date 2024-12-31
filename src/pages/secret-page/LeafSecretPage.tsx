import React, { useEffect } from "react";
import { useUserContext } from "../../user/context/UserContext";
import { PokemonType } from "../../enumerators/pokemonType.enum";
import SecretComponent from "./SecretComponent";
import { Texts } from "../../resources/texts";

const LeafSecret: React.FC = () => {
  const typesList = PokemonType;
  const { secrets, setSecrets } = useUserContext(); 

  let textSecret = '';
   const { TypeDescription, NewSecret, ImagePath } = Texts.LeafSecret;
  
  
  useEffect(() => {
    if (!secrets.includes(typesList.leaf)) {
      setSecrets([...secrets, typesList.leaf]);
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

export default LeafSecret;
