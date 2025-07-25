<script lang="ts">
    import { onMount } from "svelte";

    interface Project {
        name: string;
        url: string;
        year: string;
        description: string;
        yes?: boolean;
    }

    const projects: Project[] = [
        {
            name: "drawcat.lol",
            url: "https://drawcat.lol",
            year: "2025",
            description: "a collection of poorly drawn cats",
            yes: true,
        },
        {
            name: "year progress",
            url: "https://yearprogress.ronykax.xyz",
            year: "2025",
            description: "tracks the current year's progress",
        },
        {
            name: "hackaplace",
            url: "https://hackaplace.vercel.app",
            year: "2025",
            description: "open 1000x1000 canvas for hack clubbers",
        },
        {
            name: "bounce back",
            url: "https://ronykax.itch.io/bounce-back",
            year: "2024",
            description: "2D game where you're your own enemy",
        },
        {
            name: "folios.cc",
            url: "https://folios.cc",
            year: "2024",
            description: "place to explore community builders",
        },
        {
            name: "trex",
            url: "https://github.com/ronykax/Trex",
            year: "2020",
            description: "first game i ever made",
        },
    ];

    const links = [
        { name: "github", url: "https://github.com/ronykax" },
        { name: "youtube", url: "https://youtube.com/@ronykax" },
        { name: "twitter", url: "https://x.com/ronykax" },
        { name: "discord", url: "https://discord.gg/CU5SUGNvtH" },
        { name: "itch.io", url: "https://ronykax.itch.io" },
    ];

    let randomColor = $state("red");

    const colors = [
        "red",
        "orange",
        "yellow",
        "greenyellow",
        "skyblue",
        "blueviolet",
        "violet",
    ];

    let index = 0;

    onMount(() => {
        setInterval(() => {
            randomColor = colors[index];
            index = (index + 1) % colors.length;
        }, 250);
    });
</script>

<svelte:head>
    <title>ronykax</title>
</svelte:head>

<div class="tracking-tighter px-4 py-6 md:py-16">
    <p class="text-lg leading-snug">
        <br />

        hi, i'm <a href="/bio">rony</a> and i love building cool shit.

        <br />
        <br />

        sometimes it's a dumb app that doesn't help anyone. other times, it's
        something that solves a real problem.

        <br />
        <br />

        at the end of the day, if whatever i made makes someone go "yo this is
        kinda sick" then i'm doing it right.

        <br />
        <br />
        <br />

        <strong>here's some experiments i'm proud of:</strong>
    </p>

    <br />

    <ul class="text-lg leading-snug">
        {#each projects as item}
            <li>
                <div class="flex w-full">
                    <span class="mr-2.5">*</span>
                    <div class="w-full">
                        <div class="flex justify-between w-full">
                            <a
                                href={item.url}
                                target="_blank"
                                style:color={item.yes ? randomColor : ""}
                            >
                                {item.name}
                            </a>

                            <span class="opacity-50">
                                {item.year}
                            </span>
                        </div>
                        <span class="opacity-75">
                            {item.description}
                        </span>
                    </div>
                </div>

                <br />
            </li>
        {/each}
    </ul>

    <br />

    <p class="text-lg">
        {#each links as link, i}
            <span class="font-black">
                <a href={link.url} class="font-normal">
                    {link.name}
                </a>
                {i === links.length - 1 ? "" : " ∕ "}
            </span>
        {/each}
    </p>
</div>

<style>
    p a {
        font-weight: bold;
    }
</style>
