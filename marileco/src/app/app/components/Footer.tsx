export default function Footer() {
  return (
    <footer
      style={{
        padding: "20px",
        borderTop: "1px solid #eee",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      © {new Date().getFullYear()} Marileco — Todos os direitos reservados
    </footer>
  );
}
