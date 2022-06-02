<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
        <div v-for="post in posts" :key="post.title" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div v-if="post.animation" class="flex-shrink-0">
            <video autoplay loop muted playsinline class="h-72 w-full object-cover"><source :src="post.imageUrl" alt="" type="video/mp4" /></video>
          </div>
          <div v-else class="flex-shrink-0">
            <ix-img class="h-72 w-full object-cover" :src="post.imageUrl" alt="" sizes="(min-width: 1344px) 630px, (min-width: 1024px) 40vw, (min-width: 545px) 512px, 90vw" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a :href="post.category.href" class="hover:underline">
                  {{ post.category.name }}
                </a>
              </p>
              <a :href="post.href" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.description }}
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a :href="post.author.href">
                  <span class="sr-only">{{ post.author.name }}</span>
                  <ix-img
                    class="h-10 w-10 rounded-full"
                    width="40"
                    height="40"
                    fixed
                    :src="post.author.imageUrl"
                    :imgixParams="{ fit: 'facearea', facepad: '2.5'}"
                    alt=""
                  />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a :href="post.author.href" class="hover:underline">
                    {{ post.author.name }}
                  </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time :datetime="post.datetime">
                    {{ post.date }}
                  </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> {{ post.readingTime }} read </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    title: 'Suspicious Man Joyriding on Tattooine',
    href: '#',
    category: { name: 'Article', href: '#' },
    animation: true,
    description:
      'A well groomed older man wearing robes was seen joyriding through Tattooine. Inquisitors and members of the Red Hot Chili Peppers have been looking for a similarly dressed man. If you see this man, contact your nearest office of the Inquisitorius with additional info.',
    date: 'Jun 2, 2022',
    datetime: '2022-06-02',
    imageUrl:
      'https://external-preview.redd.it/iQlRRlCuu3Sv8x2NUhTFjdfqdB1AzS-W5kiP22SUi8I.gif?format=mp4&s=28f3f7af7be150a8cc6eaa10999ff71363ce6a46',
    readingTime: '1 min',
    author: {
      name: 'Tom Dale',
      href: '#',
      imageUrl:
        '/krennic_profile.png',
    },
  },
  {
    title: 'Marauders Strike Again on Gargon',
    href: '#',
    category: { name: 'Article', href: '#' },
    animation: false,
    description:
      'Six marauders identifying themselves as “Cloud Riders” recently raided an Imperial spice cache on Gargon. The marauders stole Imperial equipment before making their escape. It is believe they are lead by a marauder called Enfys Nest, whom has been seen on Savareen. Anyone with knowledge of these marauders or there whereabouts are to immediately contact their local Imperial garrison.',
    date: 'Jun 2, 2022',
    datetime: '2022-06-02',
    imageUrl:
      '/2021/02/cloudriders.jpeg',
    readingTime: '1 min',
    author: {
      name: 'Tom Dale',
      href: '#',
      imageUrl:
        '/krennic_profile.png',
    },
  },
  {
    title: 'Max Rebo Band Tops Charts',
    href: '#',
    category: { name: 'Article', href: '#' },
    animation: false,
    description:
      'The Max Rebo Band, led by lead singer Snootles, has recently been topping the galactic charts with their new song Galactic Dance Blast. Although the band has existed for a long time in many iterations, they have become particularly popular since playing at Jabba’s Palace.',
    date: 'Jun 2, 2022',
    datetime: '2022-06-02',
    imageUrl:
      '/2021/02/maxrebo.jpg',
    readingTime: '1 min',
    author: {
      name: 'Tom Dale',
      href: '#',
      imageUrl:
        '/krennic_profile.png',
    },
  },
  {
    title: 'Tips for Farming in a Desert',
    href: '#',
    category: { name: 'Article', href: '#' },
    animation: false,
    description:
      'There’s no harder terrain for a desert than a farm. But if we take some tips from the Lars family, they can show how to successfully run a farm in a desert on a budget. Their suggestions include adopting children to use as labor and buying from discount marketplaces such as the Jawas.',
    date: 'Jun 2, 2022',
    datetime: '2022-06-02',
    imageUrl:
      '/2021/02/larshomestead.jpg',
    readingTime: '1 min',
    author: {
      name: 'Tom Dale',
      href: '#',
      imageUrl:
        '/krennic_profile.png',
    },
  },
  {
    title: 'Tourism Returns to Mustafar',
    href: '#',
    category: { name: 'Article', href: '#' },
    animation: false,
    description:
      'Ancient stories tell of an amazing garden scape on the planet of Mustafar. But Mustafar has always been an ash-laden volcanic planet. Following a stint of separatist mining activities as well as being the headquarters of a crime syndicate, the Galactic Empire has transformed this planet with a wonderful castle. Tourism is now picking up, with a rush of children visiting this castle.',
    date: 'Jun 2, 2022',
    datetime: '2022-06-02',
    imageUrl:
      '/2021/02/mustafarcastle.jpg',
    readingTime: '1 min',
    author: {
      name: 'Tom Dale',
      href: '#',
      imageUrl:
        '/krennic_profile.png',
    },
  },
  {
    title: 'Cold Weather Survival Skills',
    href: '#',
    category: { name: 'Article', href: '#' },
    animation: false,
    description:
      'As Far Far Away News explores more parts of the galaxy, we continue to learn more about survival skills from other civilizations. On Hoth, they have adapted to extreme cold weather by using a recently dead carcass of an animal. If you want to experience the same thing, luckily you don’t need an animal carcass, as a sleeping bag has been created to mirror this experience.',
    date: 'Jun 2, 2022',
    datetime: '2022-06-02',
    imageUrl:
      '/2021/02/sleepingbag.jpeg',
    readingTime: '1 min',
    author: {
      name: 'Tom Dale',
      href: '#',
      imageUrl:
        '/krennic_profile.png',
    },
  },
  {
    title: 'Financial Reform Bill Passes',
    href: '#',
    category: { name: 'Article', href: '#' },
    animation: false,
    description:
      'A controversial bill was passed earlier at the Galactic Senate. The bill removes regulations from the banks, allowing loans to be given to the Senate. It is believed the Senate will use this bill to secure additional money for troops to expand their Grand Army.',
    date: 'Jun 2, 2022',
    datetime: '2022-06-02',
    imageUrl:
      '/2021/02/aotcsenate.jpeg',
    readingTime: '1 min',
    author: {
      name: 'Tom Dale',
      href: '#',
      imageUrl:
        '/krennic_profile.png',
    },
  },
  {
    title: 'Young Podracer Wins Title',
    href: '#',
    category: { name: 'Article', href: '#' },
    animation: false,
    description:
      'This year’s Boonta Eve Classic at the Grand Arena on Tattoine saw an epic race between Sebulba and a young human boy. During the event, racers were attacked by a tribe of Tusken Raiders. On the final lap of the race young boy won!',
    date: 'Jun 2, 2022',
    datetime: '2022-06-02',
    imageUrl:
      '/2021/02/podrace.jpg',
    readingTime: '1 min',
    author: {
      name: 'Tom Dale',
      href: '#',
      imageUrl:
        '/krennic_profile.png',
    },
  },
]
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
