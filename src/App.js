import './App.css';
import { useState } from "react";

function App() {
  let[add,setadd]=useState('');
  let[result,setresult]=useState('');
  let[getdefault,setdefault]=useState('');
  let[select,setselect]=useState('');
  let convert=()=>{
    if(add!==""){
      //usd
      if(getdefault=="USD" && select=="USD"){
        let data=parseFloat(add)*1;
        setresult(data.toFixed(2));
      }
      if(getdefault=="USD" && select=="EUR"){
        let data=parseFloat(add)*0.85;
        setresult(data.toFixed(2));
      }
      if(getdefault=="USD" && select=="INR"){
        let data=parseFloat(add)*74.71;
        setresult(data.toFixed(2));
      }
      if(getdefault=="USD" && select=="PKR"){
        let data=parseFloat(add)*292.75;
        setresult(data.toFixed(2));
      }
      if(getdefault=="USD" && select=="NPR"){
        let data=parseFloat(add)*119.53;
        setresult(data.toFixed(2));
      }
      if(getdefault=="USD" && select=="CAD"){
        let data=parseFloat(add)*1.26;
        setresult(data.toFixed(2));
      }
      //EUR
      if(getdefault=="EUR" && select=="USD"){
        let data=parseFloat(add)/0.85;
        setresult(data.toFixed(2));
      }
      if(getdefault=="EUR" && select=="EUR"){
        let data=parseFloat(add)*1;
        setresult(data.toFixed(2));
      }
      if(getdefault=="EUR" && select=="INR"){
        let data=(parseFloat(add)/0.85)*74.71;
        setresult(data.toFixed(2));
      }
      if(getdefault=="EUR" && select=="PKR"){
        let data=(parseFloat(add)/0.85)*292.75;
        setresult(data.toFixed(2));
      }
      if(getdefault=="EUR" && select=="NPR"){
        let data=(parseFloat(add)/0.85)*119.53;
        setresult(data.toFixed(2));
      }
      if(getdefault=="EUR" && select=="NPR"){
        let data=(parseFloat(add)/0.85)*1.26;
        setresult(data.toFixed(2));
      }
      //INR
      if(getdefault=="INR" && select=="USD"){
        let data=parseFloat(add)/74.71;
        setresult(data.toFixed(2));
      }
      if(getdefault=="INR" && select=="EUR"){
        let data=(parseFloat(add)/74.71)*0.85;
        setresult(data.toFixed(2));
      }
      if(getdefault=="INR" && select=="INR"){
        let data=parseFloat(add)*1;
        setresult(data.toFixed(2));
      }
      if(getdefault=="INR" && select=="PKR"){
        let data=(parseFloat(add)/74.71)*292.75;
        setresult(data.toFixed(2));
      }
      if(getdefault=="INR" && select=="NPR"){
        let data=(parseFloat(add)/74.71)*119.53;
        setresult(data.toFixed(2));
      }
      if(getdefault=="INR" && select=="CAD"){
        let data=(parseFloat(add)/74.71)*1.26;
        setresult(data.toFixed(2));
      }
      //PKR
      if(getdefault=="PKR" && select=="USD"){
        let data=parseFloat(add)/292.75;
        setresult(data.toFixed(2));
      }
      if(getdefault=="PKR" && select=="EUR"){
        let data=(parseFloat(add)/292.75)*0.85;
        setresult(data.toFixed(2));
      }
      if(getdefault=="PKR" && select=="INR"){
        let data=(parseFloat(add)/292.75)*74.71;
        setresult(data.toFixed(2));
      }
      if(getdefault=="PKR" && select=="PKR"){
        let data=(parseFloat(add)*1);
        setresult(data.toFixed(2));
      }
      if(getdefault=="PKR" && select=="NPR"){
        let data=(parseFloat(add)/292.75)*119.53;
        setresult(data.toFixed(2));
      }
      if(getdefault=="PKR" && select=="NPR"){
        let data=(parseFloat(add)/292.75)*1.26;
        setresult(data.toFixed(2));
      }
      //NPR
      if(getdefault=="NPR" && select=="USD"){
        let data=parseFloat(add)/119.53;
        setresult(data.toFixed(2));
      }
      if(getdefault=="NPR" && select=="EUR"){
        let data=(parseFloat(add)/119.53)*0.85;
        setresult(data.toFixed(2));
      }
      if(getdefault=="NPR" && select=="INR"){
        let data=(parseFloat(add)/119.53)*74.71;
        setresult(data.toFixed(2));
      }
      if(getdefault=="NPR" && select=="PKR"){
        let data=(parseFloat(add)/119.53)*292.75;
        setresult(data.toFixed(2));
      }
      if(getdefault=="NPR" && select=="NPR"){
        let data=(parseFloat(add)*1);
        setresult(data.toFixed(2));
      }
      if(getdefault=="NPR" && select=="CAD"){
        let data=(parseFloat(add)/119.53)*1.26;
        setresult(data.toFixed(2));
      }
      //CAD
      if(getdefault=="CAD" && select=="USD"){
        let data=parseFloat(add)/1.26;
        setresult(data.toFixed(2));
      }
      if(getdefault=="CAD" && select=="EUR"){
        let data=(parseFloat(add)/1.26)*0.85;
        setresult(data.toFixed(2));
      }
      if(getdefault=="CAD" && select=="INR"){
        let data=(parseFloat(add)/1.26)*74.71;
        setresult(data.toFixed(2));
      }
      if(getdefault=="CAD" && select=="PKR"){
        let data=(parseFloat(add)/1.26)*292.75;
        setresult(data.toFixed(2));
      }
      if(getdefault=="CAD" && select=="NPR"){
        let data=(parseFloat(add)/1.26)*119.53;
        setresult(data.toFixed(2));
      }
      if(getdefault=="CAD" && select=="CAD"){
        let data=(parseFloat(add)*1);
        setresult(data.toFixed(2));
      }
    }else{
      alert("Enter Your currency..!");
    }
  }
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div className='data'>
      <p>Currency:=</p>
      <input onChange={(e)=>setadd(e.target.value)} value={add} placeholder='Enter Currency..!'></input>
      </div>
      <select onChange={(e)=>{setdefault(e.target.value)}}>
        <option value={""}>select</option>
        <option value={"USD"}>USD</option>
        <option value={"EUR"}>EUR</option>
        <option value={"INR"}>INR</option>
        <option value={"PKR"}>PKR</option>
        <option value={"NPR"}>NPR</option>
        <option value={"CAD"}>CAD</option>
      </select>
      <select onChange={(e)=>{setselect(e.target.value)}}>
        <option value={""}>select</option>
        <option value={"USD"}>USD</option>
        <option value={"EUR"}>EUR</option>
        <option value={"INR"}>INR</option>
        <option value={"PKR"}>PKR</option>
        <option value={"NPR"}>NPR</option>
        <option value={"CAD"}>CAD</option>
      </select>
      <br></br>
      <button onClick={convert}> Convert </button>
      <br></br>
      <input value={result}></input>
    </div>
  );
}

export default App;
