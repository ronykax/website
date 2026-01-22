"use client";

import { useEffect, useState } from "react";
import { getAgeDecimal } from "@/lib/utils";

const DOB = new Date("2008-02-20");

export function AgeDecimal() {
  const [decimal, setDecimal] = useState("");

  useEffect(() => {
    setDecimal(getAgeDecimal(DOB));

    const interval = setInterval(() => {
      setDecimal(getAgeDecimal(DOB));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return <>{decimal}</>;
}
