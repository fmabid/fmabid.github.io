<template>
  <div>
    <header class="relative">
      <nav class="container mx-auto">
        <ul class="flex items-center justify-end gap-x-5 py-4">
          <li class="transition duration-150 ease-in-out hover:text-gray-600">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="transition duration-150 ease-in-out hover:text-gray-600">
            <NuxtLink to="/projects">Projects</NuxtLink>
          </li>
          <!-- <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li> -->
        </ul>
      </nav>
    </header>

    <NuxtPage />
  </div>
</template>
