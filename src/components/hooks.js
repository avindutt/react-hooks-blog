import { useState } from "react";

export function useFormInput (initialValue) {
    const [value, setvalue] = useState(initialValue);

    function handleChange(e) {
        setvalue(e.target.value);
    }

    return {
        value,
        onChange : handleChange
    }
}