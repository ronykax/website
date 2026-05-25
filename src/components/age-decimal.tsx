"use client";

import { useEffect, useState } from "react";

const getDecimal = () => {
  const birthday = new Date("2008-02-20");
  const ageMs = Date.now() - birthday.getTime();
  const ageYears = ageMs / (365.25 * 24 * 60 * 60 * 1000);
  return (ageYears % 1).toFixed(10).slice(1);
};

export default function AgeDecimal() {
  const [decimal, setDecimal] = useState(getDecimal);

  useEffect(() => {
    const interval = setInterval(() => setDecimal(getDecimal()), 50);
    return () => clearInterval(interval);
  }, []);

  return decimal;
}
