"use client";
import React, { useState, useEffect } from "react";


const Clock = () => {

    const [hour, setHour] = useState<Date>(new Date());

    const hourOptions: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Europe/London"
    };

    const hourFormat = new Intl.DateTimeFormat("en-GB", hourOptions);
    const hora = hourFormat.format(hour);

    const getTime = (date: Date) => {
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
                getTime(new Date())
            }</p>
        </div>
    );
};

export default Clock;