export default function PlayPage() {
  return (
    <div className="fixed inset-0 flex flex-col">
      <iframe
        title="Wordle helper"
        src="/wordle-cheater.html"
        className="h-full w-full flex-1 border-0 bg-white"
      />
    </div>
  );
}
