import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Willkommen zum Geschichten Brunnen</h1>
      <Link href="/storyList">
        <button>Go to my stories</button>
      </Link>
    </div>
  );
}
