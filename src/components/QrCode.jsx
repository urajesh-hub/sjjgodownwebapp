import { useState } from "react"
import './QrCode.css';

export const QrCode = () => {
    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false);
    const [qrData, setQrData] = useState("https://srijayajothi.com/index.html");
    const [qrSize, setQrSize] = useState("150");

    async function generateQR() {
        setLoading(true);
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);
        } catch (error) {
            console.error("Error Generating QR Code", error);
        } finally {
            setLoading(false);
        }


    }

    function downloadQR() {
        fetch(img).then((response) => response.blob()).then((blob) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "QRCode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    return (
        <div className="app-container">
            <div className="card">
                
            </div>
            <h1>QR CODE GENERATOR</h1>
            {loading && <p>Please Wait...</p>}
            <img src={img} alt="" className="qrcodeinput" />
            <div>
                <label htmlFor="datainput" className="input-label"> Data for QR Code:</label>
                <input type="text" value={qrData} id="datainput" placeholder="Enter QR Code" onChange={(e) => setQrData(e.target.value)} />

                <label htmlFor="sizeInput" className="input-label"> Image size (e.g., 150):</label>
                <input type="text" value={qrSize} id="sizeInput" placeholder="Enter Image Size" onChange={(e) => setQrSize(e.target.value)} />
                <button className="gen-button" disabled={loading} onClick={generateQR}>Generate QR Code</button>
                <button className="down-button" onClick={downloadQR}>Download QR Code</button>
                <div>
                    <p className="footer">
                        Designed By <a href="https"> R.RAVIKUMAR, INCHARGE - RAW MATERIAL</a>
                    </p>
                </div>

            </div>

        </div>
    )
}
