import { useEffect, useState } from "react";
import Carta from "./Carta";

const MiApi = () => {

    const [datos, setDatos] = useState([]);

    const[busqueda, setBusqueda] = useState("");

    useEffect(() => {
        obtenerData();
    }, []);

    const obtenerData =  async () => {
        const url = "https://rickandmortyapi.com/api/character";
        const respuesta = await fetch(url);
        const { results } = await respuesta.json();

        const personajes = results.map((personaje) => {
            return{
                id: personaje.id,
                contenido: {
                    "name" : personaje.name,
                    "gender" : personaje.gender,
                    "status" : personaje.status,
                    "species" : personaje.species,
                    "photo" : personaje.image 
                }
            };
        });

        setDatos(personajes.reverse());
        
    };

    return (
        <>
            <div className="mb-5 ms-5 me-5">
                <label htmlFor="busqueda">Search</label>
                <input
                    id="busqueda"
                    type="text"
                    placeholder="Search character"
                    className="form-control"
                    onChange={(e) => { 
                        setBusqueda(e.target.value)
                    }}
                    value={busqueda}
                />
            </div>
            <div className="container">
                <div className="row">
                    {
                        datos
                            .filter((item) => {
                                if( typeof item.contenido.name === "string" &&
                                item.contenido.name.toLowerCase().includes(busqueda.toLowerCase())
                                ){
                                    return true;
                                }

                                return false;
                            })

                            .map((item) => {
                                return <Carta key={item.id} contenido={["Name: " + item.contenido.name, "Status: " + item.contenido.status, "Gender: " + item.contenido.gender, "Species: " + item.contenido.species, item.contenido.photo]}/>;
                            })
                    }
                </div>
            </div>
        </>
    );

};

export default MiApi; 