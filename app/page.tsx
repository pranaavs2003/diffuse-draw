"use client"
import { useState } from "react";
import Form from "../components/Form";
import Output from "../components/Output";

export default function page() {
    const [isOutput, setIsOutput] = useState(true);

    return (
    <div className="" >
        {
          (isOutput)
          ?
          <Output/>
          :
          <Form/>
        }
    </div>
  );
}
