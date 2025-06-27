import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const MyDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    return (
        <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            className="w-full px-3 py-2 border bg-white  border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"

        />
    );
};
