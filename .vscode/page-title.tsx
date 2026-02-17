export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
      {children}
    </h1>
  );
}
