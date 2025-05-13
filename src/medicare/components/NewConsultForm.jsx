import { useRef, useState } from "react"

import { useForm } from "../../hooks"

import { InputDate, InputTime, InputText, SelectText, InputArea, Medications, UploadFile, Dialog } from "./"

export const NewConsultForm = () => {

    const [fileSelected, setFileSelected] = useState("")
    const [medications, setMedications] = useState([])

    const addmedicationDialogRef = useRef()

    const { patient, date, hour, reasonConsultation, symptoms, diagnosis, treatment, additionalObservations, name, dosage, frecuency, duration, notes, onInputChange, onResetForm } = useForm({
        patient: "",
        date: "",
        hour: "",
        reasonConsultation: "",
        symptoms: "",
        diagnosis: "",
        treatment: "",
        additionalObservations: "",

        name: "",
        dosage: "",
        frecuency: "",
        duration: "",
        notes: "",
    })

    const getNextId = (array=[]) =>{
        if (array.length === 0) return 1

        const maxId = array.reduce((max, item) => item.id > max ? item.id : max, 0)
        return maxId + 1
    }

    const addMedication = () => {
        if (name == "" || dosage == "" || frecuency == "") return

        const id = getNextId(medications)
        setMedications([...medications, {id, name, dosage, frecuency, duration, notes }])
        addmedicationDialogRef.current.close()

    }

    const showDialog = () => {
        addmedicationDialogRef.current.showModal()
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={onFormSubmit}>
            <Dialog
                ref={addmedicationDialogRef}
                title="Añadir Medicamento"
                callback={addMedication}
            >
                <div className="flex flex-col gap-5">
                    <InputText onInputChange={onInputChange} name="name" value={name} label="Nombre del medicamento *" placeholder="" />
                    <div className="flex gap-5 flex-wrap md:flex-nowrap">
                        <InputText onInputChange={onInputChange} name="dosage" value={dosage} label="Dosis *" placeholder="Ej: 500mg" />
                        <InputText onInputChange={onInputChange} name="frecuency" value={frecuency} label="Frecuencia *" placeholder="Ej: Cada 8 horas" />
                    </div>
                    <InputText onInputChange={onInputChange} name="duration" value={duration} label="Duración del tratamiento" placeholder="Ej: 7 dias" />
                    <InputArea onInputChange={onInputChange} name="notes" value={notes} label="Instrucciones adicionales" defaultValue="" />
                </div>
            </Dialog>

            <span className="flex flex-col gap-8">
                <SelectText onInputChange={onInputChange} name="patient" value={patient} label="Paciente *" items={[
                    { value: 1, text: "Maria Gonzales Lopez" },
                    { value: 2, text: "Carlos Mendez Ruiz" },
                    { value: 3, text: "Ana Torres Garcia" },
                    { value: 4, text: "Javier Sanchez perez" },
                ]}
                />

                <div className="flex gap-5 flex-wrap md:flex-nowrap">
                    <InputDate onInputChange={onInputChange} name="date" value={date} label="Fecha *" />
                    <InputTime onInputChange={onInputChange} name="hour" value={hour} label="Hora *" />
                </div>

                <InputText onInputChange={onInputChange} name="reasonConsultation" value={reasonConsultation} label="Motivo de la consulta *" placeholder="Ej: Control de presión arterial" />

                <InputArea onInputChange={onInputChange} name="symptoms" value={symptoms} label="Síntomas reportados" defaultValue="Describa los síntomas que reporta el paciente" />
                <InputArea onInputChange={onInputChange} name="diagnosis" value={diagnosis} label="Diagnóstico *" defaultValue="Diagnóstico realizado" />
                <InputArea onInputChange={onInputChange} name="treatment" value={treatment} label="Tratamiento sugerido" defaultValue="Tratamiento recomendado" />

                <Medications showDialog={showDialog} medications={medications} setMedications={setMedications} />

                <InputArea onInputChange={onInputChange} name="additionalObservations" value={additionalObservations} label="Observaciones adicionales" defaultValue="Otras observaciones relevantes" />

                <UploadFile label="Archivos adjuntos" setFileSelected={setFileSelected} />
            </span>
        </form>
    )
}