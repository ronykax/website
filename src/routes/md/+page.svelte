<script>
    import { onMount } from "svelte";
    import { marked } from "marked";

    let content = "";

    onMount(async () => {
        const res = await fetch(
            "https://raw.githubusercontent.com/ronykax/stuff/main/README.md"
        );

        const text = await res.text();
        content = await marked.parse(text);
    });
</script>

<div
    class="tracking-tighter opacity-75 px-4 py-6 md:py-16 text-lg prose prose-invert prose-h2:text-lg prose-ul:list-none prose-ul:list-outside"
>
    {@html content}
</div>
