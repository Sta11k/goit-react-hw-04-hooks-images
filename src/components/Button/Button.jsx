export default function Button({ text, loadMorer }) {
  return (
    <button type="button" className="Button" onClick={loadMorer}>
      {text}
    </button>
  );
}
