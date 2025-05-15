<script lang="ts">
    import "../app.css";

    let { children } = $props();
</script>

<div class="vhs"></div>

<main class="max-w-xl mx-auto h-screen flex items-center">
    {@render children()}
</main>

<style>
    .vhs {
        position: fixed;
        inset: -200%;
        background-size: 75%;
        background-image: url("/noise.png");
        opacity: 1%;
        animation: shift 0.1s linear infinite both;
        z-index: 100;
        pointer-events: none;
    }

    @keyframes shift {
        0% {
            transform: translateX(10%) translateY(10%);
        }

        100% {
            transform: translateX(-10%) translateY(-10%);
        }
    }
</style>
