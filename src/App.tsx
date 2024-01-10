import { FormEvent, useState } from 'react';

const App = () => {
  const [inputQr, setInputQr] = useState<string>('');
  const [imagemQrCode, setImageQrCode] = useState<string>('');

  function gerarQrCode(e: FormEvent) {
    e.preventDefault();
    const baseUrl = `http://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
      inputQr,
    )}!&size=150x150`;

    if (inputQr === '') {
      alert('Preenha o campo');
      return;
    }

    setImageQrCode(baseUrl);
  }

  return (
    <div className="flex items-center h-screen justify-center max-md:bg-slate-700 px-5">
      <form className="min-h-96 flex items-center flex-col gap-2">
        <h2 className="max-md:text-white font-bold text-2xl">Gerador de QR Code</h2>
        <label
          className="max-md:text-white font-semibold text-gray-700 max-md:font-normal text-base text-center"
          htmlFor="qrcode"
        >
          Escreva um titulo ou cole um Link para gerar o QrCode
        </label>
        <input
          id="qrcode"
          onChange={(e) => setInputQr(e.target.value)}
          className="w-full rounded font-medium border border-gray-800 text-xl p-3 outline-none"
          type="text"
          />

        <button
          onClick={gerarQrCode}
          className="bg-sky-800 w-full text-white rounded-md p-2 font-medium text-xl"
        >
          Gerar QrCode
        </button>


        {imagemQrCode && (
          <img className="mt-5 max-w-full" src={imagemQrCode} alt="" />
        )}
      </form>
    </div>
  );
};

export default App;
