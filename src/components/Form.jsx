import {useState} from "react";

const initState ={
    mascota : "",
    propietario : "",
    contacto : "",
    alta : "",
    sintomas : ""

};
const Form = () => {

    const [patient, setPatient] = useState(initState);
    const [error,setError] = useState(false);

    const handleChange = (e) => {
      const {name, value} = e.target;
        setPatient(Object.assign({}, patient,{[name] : value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if( patient.mascota === "" || patient.propietario === "" || patient.contacto === "" || patient.alta ==="" || patient.sintomas === "" ){
            setError(true);
            console.log(error)
            return
        }
            setError(false)
            localStorage.setItem('patient', JSON.stringify(patient));
            setPatient(initState);





    }
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguiento pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {" "}
            <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5 text-left"
                  onSubmit={handleSubmit}
            >
                {
                    error && (
                        <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
                            <p>Todos los campos son obligatorios</p>
                        </div>
                    )
                }
                <div className="mb-5">
                    <label htmlFor="mascota"
                           className="block text-gray-700 uppercase font-bold mb-2"
                    >
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        name="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                        value={patient.mascota}
                        onChange={ e =>handleChange(e)}
                    />

                </div>
                <div className="mb-5">
                    <label htmlFor="propietario"
                           className="block text-gray-700 uppercase font-bold mb-2"
                    >
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        name="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                        value={patient.propietario}
                        onChange={e => handleChange(e)}
                    />

                </div>
                <div className="mb-5">
                    <label htmlFor="contacto"
                           className="block text-gray-700 uppercase font-bold mb-2"
                    >
                        Email
                    </label>
                    <input
                        id="contacto"
                        name="contacto"
                        type="email"
                        placeholder="Email contacto propietario "
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                        value={patient.contacto}
                        onChange={e => handleChange(e)}
                    />

                </div>
                <div className="mb-5">
                    <label htmlFor="alta"
                           className="block text-gray-700 uppercase font-bold mb-2"
                    >
                        Alta
                    </label>
                    <input
                        id="alta"
                        name="alta"
                        type="date"
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                        value={patient.alta}
                        onChange={ e => handleChange(e)}
                    />

                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas"
                           className="block text-gray-700 uppercase font-bold mb-2"
                    >
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        name="sintomas"
                        placeholder="Sintomas"
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                        onChange={e => handleChange(e)}
                    />

                </div>
                <input
                    type="submit"
                    value="Agregar paciente"
                    className={`w-full bg-indigo-600 text-white uppercase font-bold
                    hover:bg-indigo-700 cursor-pointer transition-colors p-3
                    ${error && "cursor-not-allowed"} `}
                />
            </form>
        </div>
    );
};

export default Form;