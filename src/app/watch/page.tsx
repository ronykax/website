import Image from "next/image";

export default function Page() {
  return (
    <div className="mt-12">
      <p className="text-pretty text-center">
        i started watching <strong>attack on titan</strong> around the first
        week of february in 2024 and finished it on the 18th, two days before i
        turned 16.
        <br />
        <br />
        <Image
          alt="AOT"
          className="aspect-video rounded-lg"
          height={1600}
          src="/aot.jpg"
          width={900}
        />
        <br />
        for weeks, it was all i could think about.{" "}
        <strong>attack on titan</strong> is genuinely a cinematic masterpiece,
        and i'll never find anything that comes close to it.
        <br />
        <br />
        it taught me that it's the little things in life that bring joy. it
        taught me that there's no point in keeping the circle of hate going.
        <br />
        <br />
        <Image
          alt="AOT"
          className="aspect-video rounded-lg"
          height={1600}
          src="/aot.jpeg"
          width={900}
        />
        <br />i wouldn't be the same person i am today if it wasn't for{" "}
        <strong>attack on titan</strong>. if you're thinking about watching it,
        you should 1000%.
        <br />
        <br />
        p.s. my DMs are always open if you wanna talk about{" "}
        <strong>attack on titan</strong>, or anything else :D
      </p>
    </div>
  );
}
