import React, { useState, useEffect } from 'react';

interface TypingTextProps {
  prefix?: string;
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  className?: string;
}

export const TypingText: React.FC<TypingTextProps> = ({
  prefix = '',
  strings,
  typeSpeed = 100,
  backSpeed = 50,
  backDelay = 1500,
  className = '',
}) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentFullString = strings[currentStringIndex];

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentFullString.substring(0, currentText.length - 1));
        }, backSpeed);
      }
    } else {
      if (currentText === currentFullString) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, backDelay);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentFullString.substring(0, currentText.length + 1));
        }, typeSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings, typeSpeed, backSpeed, backDelay]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      {prefix && <span className="mr-2">{prefix}</span>}
      <span className="font-semibold text-primary">{currentText}</span>
      <span className="animate-blink ml-0.5 text-primary">|</span>
    </div>
  );
};
