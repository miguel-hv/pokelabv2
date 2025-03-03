import { useState } from "react";
import { PokemonList } from "../../enumerators/pokemon.enum";
import { Pokemon } from "../../models/Pokemon.model";
import { DialogContent } from "../../models/DialogText.model";
import { Button } from "@mui/material";
import { usePokemon } from "../../customHooks/usePokemon";
import DialogOak from "../../components/shared/DialogOak";
import { useNavigationUtils } from "../../customHooks/useNavigationUtils";
import { useDialog } from "../../customHooks/useDialog";

const SelectPokePage: React.FC = () => {
    const { pokemon, setPokemon } = usePokemon();
    const { navigateBack } = useNavigationUtils();
    const pokemonList = PokemonList;
    const [newPokemon, setNewPokemon] = useState<Pokemon | null>(null);
    const { isDialogOpen, openDialog, closeDialog } = useDialog();
    const [dialogSettings, setDialogSettings] = useState<DialogContent>({
        description: '',
        ok: '¡Elegir!',
        no: 'Mejor no',
    });    

    const handleDialogOpen = (clickedPokemon: Pokemon) => {
        if(pokemon?.name === clickedPokemon?.name) {
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
                description: dialogTexts[clickedPokemon.name] || '',
                ok: '¡Elegir!',
                no: 'Mejor no',
            });
        }
        setNewPokemon(clickedPokemon);
        openDialog();
        (dialogSettings);
    }

    const handleDialogAccept = () => {
        closeDialog();
        if (newPokemon) {
            setPokemon(newPokemon);
            handleGoBack();
        }
    };

    const handleDialogClose = () => {
        closeDialog();
    };

    const handleGoBack = () => {
        navigateBack();
    }

    return (
        <div className="screen-container__inner">
            <div className="button-container">
                <Button variant="contained" onClick={handleGoBack}>
                    Volver
                </Button>
            </div>
            <div className="menu menu--with-button" >
                { pokemonList.map((pokemon) => (
                    <div className="menu__link card" onClick={() => handleDialogOpen(pokemon)} key={pokemon.name}>
                        <div className="menu__item">
                            <div className="menu__image-container">
                                <img 
                                    className="menu__image"
                                    src={`	../../../assets/images/pokemon/${pokemon.name}_sprt.png`}
                                    alt={pokemon.name}
                                />
                            </div>
                            <div>{pokemon.name}</div>
                        </div>
                    </div>
                ))}
            </div>
            {isDialogOpen && (
                <DialogOak
                    open={isDialogOpen}
                    onClose={handleDialogClose}
                    onAccept={handleDialogAccept}
                    description={dialogSettings.description}
                    okButton={dialogSettings.ok}
                    noButton={dialogSettings.no}
                />
            )}
        </div>
    )
};

export default SelectPokePage;