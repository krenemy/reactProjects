import React, { useCallback, useEffect, useRef, useState } from "react";

function P2() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [pass, setPass] = useState("");

const passRef =useRef(null)
const copyPassToClip= useCallback(()=>{
    passRef.current?.select();

    window.navigator.clipboard.writeText(pass)
},[pass])
  const passwordGen = useCallback(() => {
    let pass = "";
    let str = " ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+~<>?:{}";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPass(pass);
  }, [length, numberAllow, charAllow, setPass]);
  useEffect(() => {
    passwordGen();
  }, [length, numberAllow, charAllow, passwordGen]);

  return (
    <div className="bg-slate-800 h-max w-max flex flex-col justify-center items-center space-y-4">
      <h1 className="text-white 3xl">Password generator</h1>
      <div className="flex flex-row space-x-2">
        <input
          className="border-2 rounded-sm border-black"
          type="text"
          value={pass}
          placeholder="password"
          readOnly
          ref={passRef}
        />
        <button className="p-2 border-2 bg-lime-500 text-white"
        onClick={copyPassToClip}>Copy</button>
      </div>
      <div className="bg-white flex flex-row space-x-2">
        <input
          className="cursor-pointer"
          type="range"
          min={6}
          max={20}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label>Length:{length}</label>
        <input
          className=""
          type="checkbox"
          defaultChecked={numberAllow}
          id="numberAllow"
          onChange={() => {
            setNumberAllow((prev) => !prev);
          }}
        />
        <label>Number</label>
        <input
          type="checkbox"
          defaultChecked={charAllow}
          id="charAllow"
          onChange={() => {
            setCharAllow((prev) => !prev);
          }}
        />
        <label>Char</label>
      </div>
    </div>
  );
}

export default P2;
