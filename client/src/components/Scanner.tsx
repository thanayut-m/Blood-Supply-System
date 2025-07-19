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

  // useEffect(() => {
  //   const codeReader = new BrowserMultiFormatReader();
  //   readerRef.current = codeReader;

  //   codeReader.decodeFromVideoDevice(undefined, videoRef.current!, (result: Result | undefined, _, controls) => {
  //     if (result) {
  //       const text = result.getText();
  //       onResult?.(text);

  //       stopStream();
  //       controls.stop();
  //     }
  //   }).then(() => {
  //     const stream = videoRef.current?.srcObject as MediaStream | null;
  //     streamRef.current = stream;
  //   });

  //   return () => {
  //     stopStream();
  //   };
  // }, [onResult]);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    readerRef.current = codeReader;

    // 👇 ขอสิทธิ์กล้องล่วงหน้า (ทำให้ Safari เด้ง popup ถ้ายังไม่ได้ให้สิทธิ์)
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        stream.getTracks().forEach(track => track.stop()); // ปิด stream ทันทีหลังขอสิทธิ์

        // เริ่ม decode หลังจากขอสิทธิ์แล้ว
        codeReader.decodeFromVideoDevice(undefined, videoRef.current!, (result: Result | undefined, _, controls) => {
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
      })
      .catch((err) => {
        console.error("ไม่สามารถเข้าถึงกล้อง:", err);
        alert("ไม่สามารถเข้าถึงกล้องได้ กรุณาอนุญาตการใช้งานกล้องในเบราว์เซอร์ของคุณ");
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
        playsInline
        autoPlay
        muted
        className="w-full h-[350px] object-cover rounded-md"
        style={{ maxWidth: 400 }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src={OutlineScan} className="p-4 w-full h-full object-contain" alt="Icon" />
      </div>
    </div>
  );
});
