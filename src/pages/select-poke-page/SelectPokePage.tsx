import { useState } from "react";
import { PokemonList } from "../../enumerators/pokemon.enum";
import { Pokemon } from "../../models/Pokemon.model";
import { useUserContext } from "../../user/context/UserContext";
import { DialogContent } from "../../models/DialogText.model";
import { useAuth } from "../../auth/services/AuthService";
import { useNavigate } from "react-router-dom";

const SelectPokePage: React.FC = () => {
    const auth = useAuth();
    // const resizeService = useResizeService(); //TODO: resize screen service
    const navigate = useNavigate();

    const pokemonSelected = useUserContext().pokemon;
    const pokemonList = PokemonList;

    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [dialogSettings, setDialogSettings] = useState<DialogContent>({
        description: '',
        ok: '¡Elegir!',
        no: 'Mejor no',
    });    

    const handleSelectPokemon = (pokemon: Pokemon) => {
        if(pokemon.name === pokemonSelected?.name) {
            setDialogSettings({
              description: '¡Ya tienes elegido ese pokemon!',
              ok: '',
              no: 'Entendido',
            });
          } else {
            const dialogTexts: Record<string, string> = {
                charmander: '¿Quieres elegir a Charmander, el pokémon tipo fuego?',
                squirtle: '¿Quieres elegir a Squirtle, el pokémon tipo agua?',
                bulbasaur: '¿Quieres elegir a Bulbasaur, el pokémon tipo planta?',
            };
            setDialogSettings({
                description: dialogTexts[pokemon.name] || '',
                ok: '',
                no: 'Entendido',
              });
          }
          setSelectedPokemon(pokemon); //TODO: cambiar a actualizar el usercontext
          setIsDialogOpen(true);
    }

    const handleDialogClose = (response: string) => {
        setIsDialogOpen(false);
        if (response === 'OK' && selectedPokemon) {
            auth.updatePokemon(selectedPokemon);
            handleGoBack();
        }
    };

      const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="screen-container__inner">
            <div className="button-container">
                <button className="button button--primary" onClick={handleGoBack}>
                    Volver
                </button>
            </div>
            <div className="menu" >
                { pokemonList.map((pokemon) => (
                    <div className="menu__link card" onClick={() => handleSelectPokemon(pokemon)} key={pokemon.name}>
                        <div className="menu__item">
                            <div className="menu__image-container">
                                <img 
                                    className="menu__image"
                                    src={`	../../../public/assets/images/pokemon/${pokemon.name}_sprt.png`}
                                    alt={pokemon.name}
                                />
                            </div>
                            <div>{pokemon.name}</div>
                        </div>
                    </div>
                ))}
            </div>
            {isDialogOpen && (
                <div> dialog open </div> //TODO: create dialog
                // <DialogInfoComponent
                //     maxWidth={resizeService.getWidth()}
                //     minWidth={resizeService.getWidth()}
                //     data={dialogSettings}
                //     onClose={handleDialogClose}
                // />
            )}
        </div>
    )
};

export default SelectPokePage;