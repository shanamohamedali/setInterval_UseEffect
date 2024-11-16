import React, { useEffect, useState } from "react";

export function Title() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    let interval = setInterval(() => {
      setTitle("shana");
      console.log("Mounting & set interval");
    }, 2000);
    return () => {
      console.log("unmount & clear interval")
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Welcome {title}</h1>
    </div>
  );
}
