import { useEffect, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

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
    <>
      <video ref={videoRef} style={{ width: 250, maxWidth: 400 }} />
      {/* <p>
        <span>Last result:</span> <span>{result}</span>
      </p> */}
    </>
  );
};
