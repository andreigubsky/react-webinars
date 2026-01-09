import { useState } from "react";

export default function Dates() {
  const [dates, setDates] = useState<number[]>([]);

  const addDate = () => {
    setDates([...dates, Date.now()]);
  };

  const deleteDate = (date: number) => {
    setDates(dates.filter((item) => item !== date));
  };

  return (
    <div>
      <button onClick={addDate}>Add date</button>
      <ul>
        {dates.map((date) => (
          <li key={date}>
            {date}
            <button onClick={() => deleteDate(date)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
