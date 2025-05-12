import { ButtonIcon, Text, TextMuted } from "./"

export const Medication = ({ id=0, name, dosage, duration, notes, deleteMedication }) => {

    const onClick = () => {
        deleteMedication(id)
    }

    return (
        <div className="flex w-full h-30 bg-slate-100 border-l-5 border-[var(--secondary-color)] rounded-md">
            <div className="p-4 w-full h-full flex flex-col gap-3">
                <span className="flex gap-2">
                    <Text className="font-bold">
                        {name}
                    </Text>
                    <Text>
                        {dosage}
                    </Text>
                    <Text>
                        -
                    </Text>
                    <Text>
                        {duration}
                    </Text>
                </span>
                <span title={notes}>
                    <TextMuted className="text-sm truncate">
                        {notes}
                    </TextMuted>
                </span>
                <span className="flex gap-2 ml-auto">
                    <ButtonIcon className="hover:scale-110">
                        <i className="bi bi-pencil-square"></i>
                    </ButtonIcon>
                    <ButtonIcon callback={onClick} className="hover:scale-110">
                        <i className="bi bi-trash3-fill"></i>
                    </ButtonIcon>
                </span>
            </div>
        </div>
    )
}