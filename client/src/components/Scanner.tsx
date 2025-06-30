import { useEffect, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";
import { IoIosQrScanner } from "react-icons/io";

interface ScannerProps {
  onResult?: (value: string) => void;
}

export const Scanner = ({ onResult }: ScannerProps) => {
  // const [result, setResult] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const readerRef = useRef<BrowserMultiFormatReader | null>(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    readerRef.current = codeReader;

    codeReader.decodeFromVideoDevice(undefined, videoRef.current!, (res) => {
      if (res) {
        const text = res.getText();
        // setResult(text);
        onResult?.(text);

        (codeReader as unknown as { reset: () => void }).reset();
      }
    });

    return () => {
      (readerRef.current as unknown as { reset: () => void })?.reset?.();
    };
  }, [onResult]);

  return (
    <div className="relative w-full max-w-[400px] mx-auto">
      <video
        ref={videoRef}
        className="w-full h-auto object-cover rounded-md"
        style={{ maxWidth: 400 }}
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <IoIosQrScanner size={200} className="text-white opacity-40" />
      </div>
      {/* <p>
        <span>Last result:</span> <span>{result}</span>
      </p> */}
    </div>

  );
};



