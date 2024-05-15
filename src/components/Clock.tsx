"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";



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
            }, 1000)
            return () => {
                clearTimeout(time)
            }
        }, [hour])
        return hora
    };

    return (
        <div className="">
            <motion.div className="absolute"
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 5 }}
            >
                <div className="text-left">
                    <p suppressHydrationWarning className="font-mono">{
                        GetTime(new Date())
                    }</p>
                </div>
            </motion.div>
            <motion.div className="absolute"
                initial={{ y: 0, opacity: 0.5 }}
                animate={{ y: 0, opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 5 }}
            >
                <div className="text-left">
                    <p suppressHydrationWarning className="font-mono">00:00:00</p>
                </div>
            </motion.div>
            <br></br>

        </div >
    );
};

export default Clock;