type PropType = {
    placeholder: string;
    // onChange: () => void;
}

export function TextInput({ placeholder } : PropType ) {
    return (
        <input style={{
            padding: '0.5rem',
            fontSize: '1rem',
            borderRadius: '0.25rem',
            border: '1px solid #ccc',
        }} type="text" placeholder={placeholder}></input>
    )
}