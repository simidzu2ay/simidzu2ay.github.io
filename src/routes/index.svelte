<script lang="ts">
  import type { MainInfoLink } from 'src/components/types/MainInfo';
  import MainInfo from '../components/MainInfo.svelte';
  import { svgs } from '../constants';

  const icons = svgs.icon;

  const links: MainInfoLink[] = [
    {
      href: 'https://github.com/simidzu2ay',
      svg: icons.github,
      color: '#1b1f23'
    },
    {
      href: 'https://vk.com/simidzu2ay',
      svg: icons.vk,
      color: '#2288f5'
    },
    {
      href: 'https://t.me/simidzu2ay',
      svg: icons.telegram,
      color: '#31a8e0'
    },
    {
      href: 'https://twitter.com/simidzu2ay',
      svg: icons.twitter,
      color: '#1d9bf0'
    },
    {
      href: 'mailto:simidzu2ay@protonmail.com',
      svg: icons.mail,
      color: '#f2f2f2'
    }
  ];
</script>

<div class="flex h-screen items-center justify-center">
  <MainInfo imgSrc="https://github.com/simidzu2ay.png" {links} />
</div>
