useEffect(() => {
  fetch("/api/suppliers")
    .then(res => res.json())
    .then(console.log);
}, []);import { useEffect } from "react";