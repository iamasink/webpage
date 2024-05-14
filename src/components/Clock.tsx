"use client";
import React, { useState, useEffect } from "react";


const Clock = () => {

    const [hour, setHour] = useState<Date>(new Date());

    const hourOptions: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Europe/London"
    };

    const hourFormat = new Intl.DateTimeFormat("en-GB", hourOptions);
    const hora = hourFormat.format(hour);

    const GetTime = (date: Date) => { // this has to start with a capital or react gets mad 
        useEffect(() => {
            const time = setTimeout(() => {
                setHour(date)
            }, 100)
            return () => {
                clearTimeout(time)
            }
        }, [hour])
        return hora
    };

    return (
        <div className="text-left">
            <p suppressHydrationWarning className="font-mono">{
                GetTime(new Date())
            }</p>
        </div>
    );
};

export default Clock;