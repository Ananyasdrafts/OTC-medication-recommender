"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export function Main() {
  const [medicine1, setMedicine1] = useState("");
  const [medicine2, setMedicine2] = useState("");
  const [output, setOutput] = useState("Output");

  function arraysEqual(a: any, b: any) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  function submitMeds() {
    const meds = [medicine1, medicine2];
    console.log(meds);

    const set1 = ["A", "B"];
    const set2 = ["C", "D"];

    if (arraysEqual(meds, set1)) {
      setOutput("Med 1");
    } else if (arraysEqual(meds, set2)) {
      setOutput("Med 2");
    } else {
      setOutput("Med Not Found");
    }
  }
  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-gray-800 p-8 space-y-6">
        <div className="space-y-3">
          <h2 className="text-white text-xl font-bold">DDI</h2>
          <Input
            placeholder="Medicine 1"
            className="bg-white p-5"
            value={medicine1}
            onChange={(e) => setMedicine1(e.target.value)}
          />
          <Input
            placeholder="Medicine 2"
            className="bg-white p-5"
            value={medicine2}
            onChange={(e) => setMedicine2(e.target.value)}
          />
          <Button variant="outline" onClick={() => submitMeds()}>
            Submit
          </Button>
        </div>
      </div>
      <div className="w-2/3 bg-gray-900 p-8">
        <div className="flex justify-end">
          <Link href="/" className="text-white">
            Home
          </Link>
        </div>
        <div className="mt-12 p-8 border border-gray-700 rounded-md bg-white">
          <h2 className="text-gray-800 text-xl">{output}</h2>
        </div>
      </div>
    </div>
  );
}
