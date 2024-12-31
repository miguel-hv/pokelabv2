import React, { useEffect } from "react";
import { useUserContext } from "../../user/context/UserContext";
import { PokemonType } from "../../enumerators/pokemonType.enum";
import SecretComponent from "./SecretComponent";
import { Texts } from "../../resources/texts";

const FireSecret: React.FC = () => {
  const typesList = PokemonType;
  const { secrets, setSecrets } = useUserContext(); 
  let textSecret = '';
  const { TypeDescription, NewSecret, ImagePath } = Texts.FireSecret;

  useEffect(() => {
    if (!secrets.includes(typesList.fire)) {
      setSecrets([...secrets, typesList.fire]);
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
