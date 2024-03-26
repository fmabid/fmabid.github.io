<template>
  <div class="container mx-auto">
    <div class="main-body mx-auto">
      <Intro />

      <div class="space-y-6">
        <p>
          Working at
          <NuxtLink
            to="https://www.sender.net/"
            target="_blank"
            rel="noopener noreferrer"
            class="!text-[#F75B11]"
            >Sender</NuxtLink
          >.
        </p>
        <p>
          I am a Developer and open source enthusiast. I like TypeScript, Go and
          enjoy creating frontend stuff that sometimes eases some extra jobs. My
          few projects can be found
          <NuxtLink to="/projects" class="text-blue-700">here</NuxtLink>.
        </p>

        <p>
          Othside of my profession, I travel a lot. Mostly like to go on a
          motorbike ride. Sometimes I capture moments and share them on my
          <NuxtLink
            to="/https://www.instagram.com/fm_abid/"
            class="text-blue-700"
            >instagram</NuxtLink
          >. I also like to write on Medium.
        </p>
      </div>

      <div class="relative mt-10">
        <p class="mb-4">Find me on:</p>

        <div class="flex flex-wrap gap-6 text-sm">
          <NuxtLink
            v-for="link in smLinks"
            :key="link.name"
            :to="link.profile"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1"
          >
            <component :is="link.icon" class="mb-1" />
            {{ link.title }}
          </NuxtLink>
        </div>

        <p class="mt-10">
          Or you can drop me an email at
          <a href="mailto:fmaabid@gmail.com" class="text-blue-700"
            >fmaabid@gmail.com</a
          >

          or ping me on
          <NuxtLink
            to="https://www.linkedin.com/in/fmabid"
            class="text-blue-700"
            >LinkedIn</NuxtLink
          >.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  GitHubIcon,
  StackOverflowIcon,
  MediumIcon,
  LinkedInIcon,
  GoogleScholarIcon,
  InstagramIcon,
} from "vue3-simple-icons";

const smLinks = [
  {
    name: "github",
    title: "GitHub",
    icon: GitHubIcon,
    profile: "https://github.com/fmabid",
  },
  {
    name: "medium",
    title: "Medium",
    icon: MediumIcon,
    profile: "https://medium.com/@fmabid",
  },
  {
    name: "linkedin",
    title: "LinkedIn",
    icon: LinkedInIcon,
    profile: "https://www.linkedin.com/in/fmabid",
  },
  {
    name: "stackoverflow",
    title: "Stack Overflow",
    icon: StackOverflowIcon,
    profile: "https://stackoverflow.com/users/6800325/abid",
  },
  {
    name: "scholar",
    title: "Google Scholar",
    icon: GoogleScholarIcon,
    profile: "https://scholar.google.com/citations?user=OY-eWmgAAAAJ&hl",
  },
  {
    name: "instagram",
    title: "Instagram",
    icon: InstagramIcon,
    profile: "https://www.instagram.com/fm_abid/",
  },
];
</script>
