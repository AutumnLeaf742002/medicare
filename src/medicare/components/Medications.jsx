import { useState } from "react"

import { Text, TextMuted, Medication, ButtonIcon } from "./"

const initialMedications = [
    {
        id: 1,
        name: "Loratadina",
        dosage: "Cada 6 horas",
        duration: "1 semana",
        notes: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet molestias architecto error debitis nemo perferendis labore officia odio? Itaque veniam et molestias aperiam suscipit corrupti earum velit dolore. Doloremque a incidunt, rerum ea officiis assumenda sit non voluptatem repudiandae illo impedit explicabo expedita temporibus est facere maiores adipisci accusamus Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 2,
        name: "Loratadina",
        dosage: "Cada 6 horas",
        duration: "1 semana",
        notes: "Nada que agregar"
    },
]

export const Medications = () => {

    const [medications, setMedications] = useState(initialMedications)

    const deleteMedication = (id) => {

        setMedications(prevMedications => {
            return prevMedications.filter(medication => medication.id !== id)
        })
    }

    return (
        <div className="flex flex-col gap-3">
            <Text className="font-semibold">
                Medicación recetada
            </Text>

            <div className="min-h-16 border border-dashed border-[var(--border-color)] rounded-md p-4 flex flex-col gap-3">

                {
                    medications?.length <= 0 && (
                        <span className="w-full h-16 flex justify-center items-center">
                            <TextMuted className="italic">
                                No se han agregado medicamentos
                            </TextMuted>
                        </span>
                    )
                }

                {

                    medications?.map((medication, index) => (
                        <Medication key={index}
                            id={medication.id}
                            name={medication.name}
                            dosage={medication.dosage}
                            duration={medication.duration}
                            notes={medication.notes}
                            deleteMedication={deleteMedication}
                        />
                    ))

                }

            </div>

            <span>
                <ButtonIcon className="text-sm">
                    <i className="bi bi-plus-lg"></i>
                    Añadir Medicamento
                </ButtonIcon>
            </span>
        </div>
    )
}