<script lang="ts">
  import BuyMeACoffeeBtn from './BuyMeACoffeeBtn.svelte';
  import Svg from './Svg.svelte';
  import type { MainInfoLink } from './types/MainInfo';

  export let imgSrc: string;
  export let links: MainInfoLink[];
</script>

<main
  class="flex flex-col items-center justify-center rounded-xl bg-gray-600 py-8 px-4 md:flex-row md:px-8"
>
  <section class="space-x-2">
    <img src={imgSrc} alt="Avatar" class="h-32 w-32 rounded-full" />

    <p class="cursor-default text-lg font-bold text-[#FFF9E9]">@simidzu2ay</p>
  </section>

  <div id="links" class="flex flex-col items-center justify-center space-y-4">
    <section
      class="mx-16 mt-3 flex items-center justify-center gap-4 md:mx-0 md:ml-4"
    >
      {#each links as link}
        <a href={link.href} target="_blank">
          <Svg
            className="w-8 transition-all ease-in-out duration-500 hover:scale-150 md:w-12 md:hover:scale-125"
            fill={link.color}
            svg={link.svg}
          />
        </a>
      {/each}
    </section>

    <BuyMeACoffeeBtn
      className="transition-all ease-in-out duration-500 hover:scale-110"
    />
  </div>
</main>
