"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export function Main() {
  const [symptom1, setSymptom1] = useState("");
  const [symptom2, setSymptom2] = useState("");
  const [symptom3, setSymptom3] = useState("");
  const [symptom4, setSymptom4] = useState("");
  const [loading, setLoading] = useState(false);
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

  const submitSymptoms = () => {
    const symptoms = [symptom1, symptom2, symptom3, symptom4];

    const set1 = ["Itching", "Skin Rash", "Patches", "Boils"];
    const set2 = ["Sneezing", "Chills", "Cough", "Watering Eyes"];

    if (arraysEqual(symptoms, set1)) {
      setOutput("Miconazole");
    } else if (arraysEqual(symptoms, set2)) {
      setOutput("Cetrizine");
    } else {
      setOutput("Not found");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-gray-800 p-8 space-y-6">
        <div className="space-y-3">
          <h2 className="text-white text-xl font-bold">Symptoms</h2>
          <Input
            placeholder="Symptom 1"
            className="bg-white p-5"
            value={symptom1}
            onChange={(e) => setSymptom1(e.target.value)}
          />
          <Input
            placeholder="Symptom 2"
            className="bg-white p-5"
            value={symptom2}
            onChange={(e) => setSymptom2(e.target.value)}
          />
          <Input
            placeholder="Symptom 3"
            className="bg-white p-5"
            value={symptom3}
            onChange={(e) => setSymptom3(e.target.value)}
          />
          <Input
            placeholder="Symptom 4"
            className="bg-white p-5"
            value={symptom4}
            onChange={(e) => setSymptom4(e.target.value)}
          />
          <div className="flex flex-row justify-between">
            <Button
              variant="outline"
              disabled={!(symptom1 && symptom2 && symptom3 && symptom4)}
              onClick={() => submitSymptoms()}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      <div className="w-2/3 bg-gray-900 p-8">
        <div className="flex justify-end">
          <Link href="/ddi" className="text-white">
            DDI
          </Link>
        </div>
        <div className="mt-12 p-8 border border-gray-700 rounded-md bg-white">
          <h2 className="text-gray-800 text-xl">{output}</h2>
        </div>
      </div>
    </div>
  );
}
