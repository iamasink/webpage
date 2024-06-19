"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Transition } from "@headlessui/react";



const Clock = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const LondonTimeFormatter = new Intl.DateTimeFormat("en-GB", {
                timeZone: "Europe/London",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            });
            const currentTime = LondonTimeFormatter.format(new Date());
            setTime(currentTime);
        };

        const interval = setInterval(updateTime, 1000);
        updateTime(); // to set the initial time immediately

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="">
            {/* <motion.div className="absolute"
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 5 }}
            > */}
            {/* <Transition
                show={time != ""}
                enter="ease-out duration-200"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-[0.98]"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-[0.98]"
            > */}
            <div className="text-left">
                <p suppressHydrationWarning className="font-mono">
                    {time}
                </p>
            </div>
            {/* </Transition> */}
            {/* </motion.div> */}

        </div >
    );
};

export default Clock;