/* eslint-disable no-unused-vars */
import { nanoid } from "nanoid";
import { Clipboard, Check } from "lucide-react";
import React, { useEffect, useState } from "react";

const Result = ({ value }) => {
  const [shortenLink, setshortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const generateShortLink = (url) => {
    const base = "https://short.ly/"; // or your custom domain
    const id = nanoid(7); // 7-char unique ID
    return `${base}${id}`;
  };

  useEffect(() => {
    if (value && value.length) {
      setLoading(true);
      const short = generateShortLink(value);
      setshortenLink(short);
      setLoading(false);
    }
  }, [value]);

  return (
    <div className="w-1/3 p-5 flex items-center justify-center gap-3">
      <p className="dark:text-gray-300/70 text-gray-700/50 text-xl break-all">
        Your link:{" "}
        <span className="text-black dark:text-white">{shortenLink}</span>
      </p>
      <button
        onClick={handleCopy}
        className="text-black dark:text-white transition-all duration-300 ease-in-out relative w-6 h-6"
        title={copied ? "Copied!" : "Copy to clipboard"}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            copied ? "opacity-0 scale-100" : "opacity-100 scale-100"
          }`}
        >
          <Clipboard size={20} />
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            copied
              ? "opacity-100 scale-100 text-black dark:text-white"
              : "opacity-0 scale-90"
          }`}
        >
          <Check size={20} />
        </span>
      </button>
    </div>
  );
};

export default Result;
