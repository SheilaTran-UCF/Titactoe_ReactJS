import React, { useEffect, useState } from "react";
import DoWithAPI from "../components/UseEffectCoponent/DoWithAPI";
import Timer from "../components/UseEffectCoponent/Timer";

// useffect : dung de xu ly side effect
// side effect : goi api lay du lieu
//               setTimeout, setInterval
//               tuong tac DOM
//                lang nghe, remove cac su kien ̣

//  use effect duoc chia lam 2 loai
//  +) Ko can clean up : call api, tuong tac DOM
//  +) Can clean up : setTimeout, setInterval , ... ( memory leak )

// useEffect co 3 cach dung
// +) ko co dependencies
// +) dependencies la mot mang rong
// +) co dependencies

// component mouted vao dom
// render lan dau tien
// diem chung :  duoc thuc thi it nhat 1 lan
// thuc sau sau khi re-render

const LearnUseEffect = () => {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  //  ko co dependencies
  //  luon duoc goi sau moi lan component re-render
  useEffect(() => {
    console.log("khong co dependencies");
  });

  // dependencies la 1 mang rong
  // chi duoc chay mot lan duy nhat
  useEffect(() => {
    console.log("dependencies la mot mang rong");
  }, []);

  // co dependencies
  // khi dependencies thay doi , useeffect se duoc goi lai
  useEffect(() => {
    console.log("co dependencies");
    return () => {
      console.log("clean up co dependencies");
    };
  }, [count, title]);

  return (
    <div>
      <h1>Learn Use Effect</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <span>{count}</span>{" "}
      <button onClick={() => setCount(count + 1)}>Add</button>
      <br />
      <br />
      <button onClick={() => setShow(!show)}>Toggle show</button>
      {show && <Timer />}
      <DoWithAPI />
    </div>
  );
};

export default LearnUseEffect;
