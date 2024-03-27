<template>
  <Head>
    <Title>Projects - Md. Faysal Mahmud Abid</Title>
  </Head>

  <div class="container mx-auto px-4 py-4 lg:px-0 lg:py-10">
    <h1 class="text-center text-2xl font-bold lg:text-4xl">Projects</h1>

    <div class="mx-auto mt-10 lg:mt-20 lg:px-80">
      <div class="relative block">
        <h4 class="mb-3 pl-9 text-xl font-bold lg:mb-6 lg:text-center">
          Crafts
        </h4>

        <div
          class="mx-auto grid grid-cols-1 text-slate-500 lg:grid-flow-col lg:grid-cols-none"
        >
          <NuxtLink
            v-for="project in personalProjects"
            :key="project.name"
            :to="project.preview"
            class="project-item group mx-auto"
          >
            <component
              :is="project.icon"
              class="text-3xl opacity-50 saturate-0 transition duration-300 ease-in-out group-hover:opacity-100"
            />
            <div class="relative">
              <p>{{ project.name }}</p>
              <p class="text-xs">{{ project.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="mx-auto mt-8 lg:mt-20 lg:px-80">
      <div class="relative block">
        <h4 class="mb-3 pl-9 text-xl font-bold lg:mb-6 lg:text-center">
          Client's Projects
        </h4>

        <div
          class="mx-auto grid grid-cols-1 text-slate-500 lg:grid-flow-col lg:grid-cols-none"
        >
          <NuxtLink
            v-for="project in clientProjects"
            :key="project.name"
            :to="project.preview"
            target="_blank"
            class="project-item group mx-auto"
          >
            <component
              :is="project.icon"
              class="text-3xl opacity-50 saturate-0 transition duration-300 ease-in-out group-hover:opacity-100"
            />
            <div class="relative">
              <p>{{ project.name }}</p>
              <p class="text-xs">{{ project.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-40 text-xs">
    <div class="container mx-auto">
      This page is inspired by Anthony Fu's
      <NuxtLink
        to="https://antfu.me/projects"
        class="font-bold text-blue-700"
        target="_blank"
        >projects</NuxtLink
      >.
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NuxtDotjsIcon, NpmIcon, VueDotjsIcon } from "vue3-simple-icons";

const personalProjects = [
  {
    name: "Vue3 Simple Dropzone",
    description: "File uploader component vor Vue3.",
    icon: NpmIcon,
    srcCode: "https://www.npmjs.com/package/vue3-simple-dropzone",
    preview: "https://www.npmjs.com/package/vue3-simple-dropzone",
  },
  {
    name: "Fakegen",
    description: "Generate fake data.",
    icon: NuxtDotjsIcon,
    srcCode: "https://fakegen.fmabid.com/",
    preview: "https://fakegen.fmabid.com/",
  },
];

const clientProjects = [
  {
    name: "Shopemaa Dashboard",
    description: "Admin dashboard for Shopemaa.",
    icon: VueDotjsIcon,
    preview: "https://shopemaa.com/",
  },
  {
    name: "Skrollo",
    description: "Meme sharing platform.",
    icon: NuxtDotjsIcon,
    preview: "https://skrollo.com/",
  },
];
</script>
