"use client";

import { useEffect, useState } from "react";

const DOB = new Date("2008-02-20T00:00:00");

function getAgeDecimal(dob: Date) {
  const now = Date.now();
  const birth = dob.getTime();

  const years = (now - birth) / (1000 * 60 * 60 * 24 * 365.2422);
  return years.toFixed(10);
}

export function AgeDecimal() {
  const [age, setAge] = useState("");

  useEffect(() => {
    const update = () => setAge(getAgeDecimal(DOB));
    update();

    const interval = setInterval(update, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-mono font-semibold tracking-tight px-0.5">
      {age}
    </span>
  )
}