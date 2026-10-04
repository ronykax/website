import { Thing } from "@/components/thing";

interface Post {
  canonical_url: string;
  id: number;
  post_date: string;
  title: string;
}

async function getPosts() {
  try {
    const response = await fetch(
      "https://ronykati.substack.com/api/v1/posts?sort=new&limit=5",
      { next: { revalidate: 300 } }
    );

    if (!response.ok) {
      return [];
    }

    const posts = (await response.json()) as Post[];

    return Array.isArray(posts) ? posts : [];
  } catch {
    return [];
  }
}

function formatPostDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    timeZone: "UTC",
    year: "numeric",
  }).format(date);
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className="mt-12 flex flex-col gap-3">
      {posts.map((item) => (
        <div className="flex items-center justify-between gap-4" key={item.id}>
          <a
            className="line-clamp-1 font-medium decoration-dashed underline-offset-2 hover:underline"
            href={item.canonical_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {item.title}
          </a>

          <h4 className="text-nowrap font-medium font-mono text-sm tracking-tight opacity-75">
            {formatPostDate(item.post_date)}
          </h4>
        </div>
      ))}
      <p className="mt-6 text-center">
        go to my{" "}
        <Thing
          className="bg-orange-200/75"
          href="https://substack.com/@ronykati"
        >
          substack
        </Thing>{" "}
        to see the full list.
      </p>
    </div>
  );
}
