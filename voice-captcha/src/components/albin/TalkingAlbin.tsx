import { useState, useEffect } from "react";

interface TalkingAlbinProps {
    messages: string[];
    msgDelay: number;
    typeDelay: number;
    onResult?: (res: any) => void;
}

const TalkingAlbin = ({ messages, msgDelay, typeDelay, onResult }: TalkingAlbinProps) => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isTalking, setIsTalking] = useState(false);

    useEffect(() => {
        if (currentMessageIndex >= messages.length) return;

        let text = messages[currentMessageIndex];
        if (!text) return; // Prevent undefined access

        let charIndex = 0;
        let textToDisplay = ""; // Local variable to track full text
        setDisplayedText(""); // Reset UI text before typing starts
        setIsTalking(true); // Make the image "talk"

        const typingInterval = setInterval(() => {
        if (charIndex < text.length) {
            textToDisplay += text[charIndex]; // Append character to local variable
            setDisplayedText(textToDisplay); // Update UI with correct text
            charIndex++;
        } else {
            clearInterval(typingInterval);
            setTimeout(() => {
            setIsTalking(false); // Stop talking animation
            if (currentMessageIndex < messages.length - 1) {
                setCurrentMessageIndex((prev) => prev + 1); // Move to next message
            } else {    
                onResult && onResult("complete"); // Notify parent component
            }
            }, msgDelay); // Pause before next message
        }
        }, typeDelay); // Typing speed

        return () => clearInterval(typingInterval);
    }, [currentMessageIndex]);

    return (
        <div className="flex flex-col items-center justify-center bg-transparent text-white p-6">
        {/* Typing Effect Text */}
        <p className="text-xl text-center p-4 rounded-md max-w-[50rem] mb-4">
            {displayedText}
        </p>

        {/* Talking Image */}
        <img
            src="./Albin.png"
            alt="Albin"
            className="w-40"
        />
        </div>
  );
};

export default TalkingAlbin;
