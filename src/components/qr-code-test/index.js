import React, { useState } from "react";
import QRCode from "qrcode.react";

const QrCodeTest = () => {
  const [qrInput, setQrInput] = useState("");
  const [qrContent, setQrContent] = useState("");

  async function onSubmit() {
    setQrContent(qrInput);
  }

  return (
    <div>
      <form>
        <textarea value={qrInput} onChange={(e) => setQrInput(e.target.value)} />
        <br />
        <button type="button" onClick={() => onSubmit()}>
          QRCodify this content
        </button>
      </form>
      <hr />
      <QRCode value={qrContent} />
    </div>
  );
};

export default QrCodeTest;