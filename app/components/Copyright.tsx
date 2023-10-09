export default function Copyright() {
  const currentYear: number = new Date().getFullYear();
  return (
    <p className="text-sm font-light">
      <strong>Copyright © {currentYear} InstaOja Limited</strong>
    </p>
  );
}
