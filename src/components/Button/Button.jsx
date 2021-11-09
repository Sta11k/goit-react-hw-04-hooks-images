export default function Button({ text, onClick }) {
  return (
    <button type="button" className="Button" onClick={onClick}>
      {text}
    </button>
  );
}
