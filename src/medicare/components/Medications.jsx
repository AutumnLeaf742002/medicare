import { useState } from "react"

import { Text, TextMuted, Medication, ButtonIcon } from "./"

export const Medications = ({ medications, setMedications, showDialog = ()=>{} }) => {

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
                            {...medication}
                            deleteMedication={deleteMedication}
                        />
                    ))

                }

            </div>

            <span>
                <ButtonIcon className="text-sm" callback={showDialog}>
                    <i className="bi bi-plus-lg"></i>
                    Añadir Medicamento
                </ButtonIcon>
            </span>
        </div>
    )
}