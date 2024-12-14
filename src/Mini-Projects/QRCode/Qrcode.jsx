import React, { useState } from 'react'
import './qrcode.css'

export default function Qrcode() {

  const [img,setImg] = useState("")
  const [loading,setLoading] = useState(false);
  const [qrData,setQrData] = useState("")
  const [qrSize,setQrSize] = useState("")

 async function generateQR(){
    setLoading(true);
    try{
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`
        setImg(url);
    }
    catch(error){
      console.log("Error generateing QR Code",error);   
    }
    finally{
      setLoading(false)
    }

  }
  function downloadQR(){
      fetch(img).then((response)=>response.blob()).then((blob)=>{
        const link = document.createElement("a");
        link.href=URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
  }

  return (
    <div className='app-container'>
      <h1>QR CODE GENERATER</h1>
      {loading && <p>Please Wait...</p>}
      {img && <img src={img} alt="" className='qr-code-image'/>}
        <div>
          <label htmlFor="dataInput" className="input-label">Data For QR Code</label>
          <input type="text" name="" id="dataInput" value={qrData} onChange={(e)=>{setQrData(e.target.value)}} placeholder='Enter data for QR code'/>

          <label htmlFor="sizeInput" className="input-label">Image Size (e.g.,150): </label>
          <input type="text" name="" id="sizeInput" value={qrSize} onChange={(e)=>{setQrSize(e.target.value)}} placeholder='Enter image size'/>
          
          <button className='generate-btn' onClick={generateQR} disabled={loading}>Generate QR Code</button>
          <button className='download-btn' onClick={downloadQR}>Download QR Code</button>
        </div>
        <p className='footer'>Designed by <a href="#kavi">Kaviyarasu 😎</a></p>
    </div>
  )
}
