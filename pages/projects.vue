<template>
  <Head>
    <Title>Projects - Md. Faysal Mahmud Abid</Title>
  </Head>

  <div class="container mx-auto py-10">
    <h1 class="text-center text-4xl font-bold">Projects</h1>

    <div class="mx-auto mt-20 lg:px-80">
      <div class="relative block">
        <h4 class="mb-6 text-center text-xl font-bold">Crafts</h4>

        <div class="mx-auto grid grid-flow-col text-slate-500">
          <NuxtLink
            v-for="project in personalProjects"
            :key="project.name"
            :to="project.preview"
            class="group flex w-[350px] items-center gap-4 p-4 no-underline opacity-50 hover:opacity-100"
          >
            <component
              :is="project.icon"
              class="text-3xl opacity-50 saturate-0 group-hover:opacity-100"
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

  <div class="absolute bottom-0 text-xs">
    This page is inspired by Anthony Fu's
    <NuxtLink to="https://antfu.me/projects" class="font-bold text-blue-700"
      >projects</NuxtLink
    >.
  </div>
</template>

<script lang="ts" setup>
import { NuxtDotjsIcon, NpmIcon } from "vue3-simple-icons";

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
</script>
