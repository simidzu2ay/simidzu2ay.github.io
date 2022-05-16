<script lang="ts">
  import BuyMeACoffeeBtn from './BuyMeACoffeeBtn.svelte';
  import Svg from './Svg.svelte';
  import { svgs } from '../constants';
  import type { MainInfoLink } from './types/MainInfo';

  export let imgSrc: string;
  export let links: MainInfoLink[];

  const quotes = svgs.quote;
</script>

<main
  class="flex scale-[0.8] flex-col items-center justify-center rounded-xl bg-gray-600 py-8
    px-4 sm:scale-[0.85] md:scale-[0.9] md:flex-row md:px-8 lg:scale-100 xl:scale-[1.1]"
>
  <section
    class="flex flex-col items-center justify-center space-x-2 space-y-2"
  >
    <img src={imgSrc} alt="Avatar" class="h-32 w-32 rounded-full" />

    <p class="flex cursor-default text-lg text-[#e2e2e2]">
      <Svg svg={quotes.left} fill="#e2e2e2" className="quote -mt-1" />
      <span class="px-2">Только дайте остаться собой...</span>
      <Svg svg={quotes.right} fill="#e2e2e2" className="quote mt-2" />
    </p>
  </section>

  <div id="links" class="flex flex-col items-center justify-center space-y-4">
    <section class="mx-16 mt-3 flex items-center justify-center gap-4 md:mx-4">
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
      className="transition-all ease-in-out duration-500 hover:scale-110 scale-90 md:scale-100"
    />
  </div>
</main>
