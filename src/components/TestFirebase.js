import React from "react";
import firebase from "../firebase";

export default function TestFirebase() {
  const onClick = () => {
    const db = firebase.firestore();
  };

  const onClick2 = async () => {
    const db = firebase.firestore();
    const data = await db.collection("tests").doc("rotations").get();
    console.log(data.data());
  };
  return (
    <div style={{ display: "flex" }}>
      <div
        className="TestFirebase"
        style={{ width: 100, height: 100, backgroundColor: "black" }}
        onClick={onClick}
      ></div>
      <div
        className="TestFirebase"
        style={{ width: 100, height: 100, backgroundColor: "black" }}
        onClick={onClick2}
      ></div>
    </div>
  );
}
