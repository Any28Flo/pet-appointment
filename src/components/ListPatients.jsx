import Patient from "./Patient.jsx";

const ListPatients = () => {
    return (
        <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">
                Listado de pacientes
            </h2>
            <p className="text-lg mt-5 text-center mb-10">Administra tus {" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
           <Patient/>
            <Patient/>

            <Patient/>

            <Patient/>

        </div>
    );
};

export default ListPatients;