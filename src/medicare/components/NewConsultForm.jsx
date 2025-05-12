import { InputDate, InputTime, InputText, SelectText, InputArea, Medications } from "./"

export const NewConsultForm = () => {
    return (
        <form>
            <span className="flex flex-col gap-8">
                <SelectText label="Paciente *" items={[
                    { value: 1, text: "Maria Gonzales Lopez" },
                    { value: 2, text: "Carlos Mendez Ruiz" },
                    { value: 3, text: "Ana Torres Garcia" },
                    { value: 4, text: "Javier Sanchez perez" },
                ]}
                />

                <div className="flex gap-5 flex-wrap md:flex-nowrap">
                    <InputDate label="Fecha *" />
                    <InputTime label="Hora *" />
                </div>

                <InputText label="Motivo de la consulta *" placeholder="Ej: Control de presión arterial" />

                <InputArea label="Síntomas reportados" defaultValue="Describa los síntomas que reporta el paciente" />
                <InputArea label="Diagnóstico *" defaultValue="Diagnóstico realizado" />
                <InputArea label="Tratamiento sugerido" defaultValue="Tratamiento recomendado" />

                <Medications />
            </span>
        </form>
    )
}