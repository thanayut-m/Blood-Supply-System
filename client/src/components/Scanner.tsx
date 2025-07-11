import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";
import type { Result } from "@zxing/library";
import OutlineScan from "../assets/OutlineScan.png";

export interface ScannerRef {
  stopCamera: () => void;
}

interface ScannerProps {
  onResult?: (value: string) => void;
}

export const Scanner = forwardRef<ScannerRef, ScannerProps>(({ onResult }, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const readerRef = useRef<BrowserMultiFormatReader | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    readerRef.current = codeReader;

    codeReader.decodeFromVideoDevice(undefined, videoRef.current!, (result: Result | undefined, error, controls) => {
      if (result) {
        const text = result.getText();
        onResult?.(text);

        stopStream();
        controls.stop();
      }
    }).then(() => {
      const stream = videoRef.current?.srcObject as MediaStream | null;
      streamRef.current = stream;
    });

    return () => {
      stopStream();
    };
  }, [onResult]);

  const stopStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  };

  useImperativeHandle(ref, () => ({
    stopCamera() {
      stopStream();
    }
  }));

  return (
    <div className="relative w-full h-full max-w-[400px] mx-auto">
      <video
        ref={videoRef}
        className="w-full h-[350px] object-cover rounded-md"
        style={{ maxWidth: 400 }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src={OutlineScan} className="p-4 w-full h-full object-contain" alt="Icon" />
      </div>
    </div>
  );
});
