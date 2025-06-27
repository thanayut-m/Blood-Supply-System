import { useState } from "react";
import { useZxing } from "react-zxing";

export const Scanner = () => {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  return (
    <>
      <video ref={ref} style={{ width: 250, maxWidth: 400 }} />

      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </>
  );
};
