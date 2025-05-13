import { useRef, useState } from "react"

import { Text } from "./"

export const UploadFile = ({ label = "no label", setFileSelected = ()=>{} }) => {

    const fileRef = useRef()
    const [sizeInMB, setSizeInMB] = useState(0)

    const onUploadFile = () => {
        fileRef.current.click()
    }

    const onFileSelected = () => {

        const file = fileRef.current.files[0]
        if (!file) return

        setSizeInMB((file.size / (1024 * 1024)).toFixed(2))
        setFileSelected(file.name)
    }

    return (
        <span className="flex flex-col gap-2 w-full">
            <label>
                <Text className="font-semibold">
                    {label}
                </Text>
            </label>
            <div onClick={onUploadFile} className="flex gap-2 items-center p-4 bg-slate-100 rounded-md border border-dashed border-[var(--border-color)] cursor-pointer">
                <i className="bi bi-cloud-arrow-up-fill text-[var(--secondary-color)] text-2xl"></i>
                <Text className="font-semibold">
                    Seleccionar archivo...
                </Text>
                <input ref={fileRef} type="file" className="w-0"
                    onChange={onFileSelected}
                />
            </div>

            {
                fileRef.current?.files[0] && (
                    <div className="p-4 border border-[var(--border-color)] rounded-md flex items-center justify-between">
                        <Text>
                            {fileRef.current.files[0]?.name}
                        </Text>
                        <Text>
                            {sizeInMB} MB
                        </Text>
                    </div>
                )
            }

        </span>
    )
}