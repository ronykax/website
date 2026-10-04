import Image from "next/image";

export default function Page() {
  return (
    <div className="mt-12">
      <Image
        alt="soonion"
        className="rounded-lg"
        height={732}
        src="/soon.jpeg"
        width={984}
      />
    </div>
  );
}
