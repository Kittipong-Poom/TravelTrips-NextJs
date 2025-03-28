"use client";
import { FaMicrophone } from "react-icons/fa";
import { useState } from "react";
import { SpeechRecognitionEvent } from "@/types/SpeechRecognitionEvent";

interface SpeechInputProps {
  setText: (text: string) => void;
}

const SpeechInput = ({ setText }: SpeechInputProps) => {
  const [isListening, setIsListening] = useState(false);
  const startListening = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "th-TH";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.start();
    setIsListening(true);
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      setText(event.results[0][0].transcript);
    };
    recognition.onerror = (event: SpeechRecognitionEvent) => {
      console.error("Speech Recognition Error:", event.error);
      alert("เกิดข้อผิดพลาด: " + event.error);
    };
    recognition.onend = () => {
      setIsListening(false);
    };
  };

  return (
    <div className="p-1">
      <FaMicrophone
        className={`mr-3 w-6 h-6 cursor-pointer duration-200 rounded-lg 
              ${
                isListening
                  ? "text-red-500 animate-pulse"
                  : "text-green-600 hover:bg-green-300"
              }`}
        onClick={startListening}
      />
    </div>
  );
};

export default SpeechInput;
