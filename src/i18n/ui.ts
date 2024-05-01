export const languages = {
  en: "English",
  uk: "Українська",
};

export const defaultLang = "en" satisfies keyof typeof languages;

export const ui = {
  en: {
    title: "I don't know what to write here, but i want a gradient",
    description:
      "I am 18yo self-taught programmer from the Luhansk region of Ukraine. I like listening to <a class='text-mauve hover:animate-pulse' href='https://en.wikipedia.org/wiki/Breakcore'>breakcore</a>, playing story games, and developing small useful utilities for myself.",
    connect: "You can find me on the links below",
    neko: "Random catgirl <span class='text-sm text-subtext0'>*I'm not responsible of that picture</span>",
  },
  uk: {
    title: "Я не знаю що тут писати, але хочу градієнт",
    description:
      "Я - 18 річний самоучка-програміст з Луганської області в Україні. Я люблю слухати <a class='text-mauve hover:animate-pulse' href='https://uk.wikipedia.org/wiki/%D0%91%D1%80%D0%B5%D0%B9%D0%BA%D0%BA%D0%BE%D1%80'>breakcore</a>, грати в сюжетні ігри та розробляти маленькі корисні утіліти для себе",
    connect: "Ви можете знайти в будь-де в вказаних посиланнях",
    neko: 'Рандомна кішко-дівчинкка <span class="text-sm text-subtext0">*я не відповідаю за картинку зображену там</span>',
  },
} as const;