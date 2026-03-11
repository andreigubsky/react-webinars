import { useState } from "react";

interface Values {
    x: number;
    y: number;
}

export default function Values(){
    const [values, setValues] = useState<Values>({x:0, y:0});
    const updateX = () => {
        setValues({
            ...values,
            x: values.x+1,
        });
    };
    const updateY = () => {
        setValues({
            ...values,
            y: values.y+1,
        });
    };

    const updateValue = (key: keyof Values) => {
        setValues({
          ...values,
          [key]: values[key] + 1,
        });
      };

    return(
        <div>
        <p>x:{values.x}, y:{values.y}</p>
        <button onClick={updateX}>Update X</button>
        <button onClick={updateY}>Update Y</button>
        <button onClick={() => updateValue("x")}>Update X</button>
        <button onClick={() => updateValue("y")}>Update Y</button>
        </div>
    );
}