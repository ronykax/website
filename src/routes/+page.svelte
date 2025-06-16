<script lang="ts">
    interface Project {
        name: string;
        url: string;
        year: string;
        description: string;
    }

    const projects: Project[] = [
        {
            name: "year progress",
            url: "https://yearprogress.ronykax.xyz",
            year: "2025",
            description: "tracks the current year's progress",
        },
        {
            name: "mood.exe",
            url: "https://github.com/ronykax/mood.exe",
            year: "2025",
            description: "desktop app that logs your mood",
        },
        {
            name: "keybored",
            url: "https://github.com/ronykax/keybored",
            year: "2025",
            description: "makes typing very fun (real)",
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
</script>

<svelte:head>
    <title>ronykax</title>
</svelte:head>

<div class="tracking-tighter px-4">
    <p class="text-lg opacity-75 leading-snug">
        <br />

        hi, i'm <a href="/bio">rony</a> and i love building cool shit.

        <br />
        <br />

        sometimes it's a dumb project that doesn't help anyone. other times,
        it's something that solves a real problem.

        <br />
        <br />

        at the end of the day, if whatever i made makes someone go "yo, this is
        kinda sick" then i'm doing it right.

        <!-- <br />
        <br /> -->

        <!-- follow me on <a href="/">𝕏</a> or <a href="/">github</a>. sometimes i
        post on <a href="/">youtube</a>. -->

        <br />
        <br />
        <br />

        <strong>check out some of my projects below!</strong>
    </p>

    <ul class="text-lg opacity-75 leading-snug">
        <br />
        {#each projects as item}
            <li>
                <div class="flex w-full">
                    <span class="mr-2.5">*</span>
                    <div class="w-full">
                        <div class="flex justify-between w-full">
                            <a href={item.url} target="_blank">
                                {item.name}
                            </a>

                            <span class="opacity-65">
                                {item.year}
                            </span>
                        </div>
                        <span class="opacity-65">
                            {item.description}
                        </span>
                    </div>
                </div>

                <br />
            </li>
        {/each}
    </ul>
</div>

<style>
    p a {
        font-weight: bold;
    }
</style>
