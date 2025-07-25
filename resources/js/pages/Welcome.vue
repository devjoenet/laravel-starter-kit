<script setup lang="ts">
  import { Head, Link as InertiaLink } from "@inertiajs/vue3";
  import { Button } from "@/components/devjoenet/Button";
  import { Steps, Step } from "@/components/devjoenet/Steps";
</script>

<template>
  <Head title="Welcome">
    <link rel="preconnect" href="https://rsms.me/" />
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  </Head>

  <div class="flex min-h-screen flex-col items-center bg-base-100 p-6 text-base-content lg:justify-center lg:p-8 dark:bg-base-200 dark:text-base-content">
    <!-- header/nav -->
    <header class="mb-6 w-full max-w-[335px] lg:max-w-4xl">
      <nav class="flex items-center justify-end gap-4 text-sm">
        <Button v-if="$page.props.auth.user" as="Link" :href="route('dashboard')" variant="outlined" size="sm"> Dashboard </Button>

        <template v-else>
          <Button as="Link" :href="route('login')" variant="text" size="sm"> Log in </Button>
          <Button as="Link" :href="route('register')" variant="text" size="sm"> Register </Button>
        </template>
      </nav>
    </header>

    <!-- content -->
    <div class="flex w-full items-center justify-center transition-opacity duration-750 lg:grow lg:opacity-100">
      <main class="flex w-full max-w-[335px] flex-col-reverse overflow-hidden rounded-lg lg:max-w-4xl lg:flex-row">
        <!-- left panel -->
        <div class="flex-1 rounded-b-lg bg-base-100 p-6 pb-12 shadow-inner lg:rounded-l-lg lg:rounded-br-none lg:pb-20 lg:p-20 dark:bg-base-200 dark:shadow-inner">
          <h1 class="mb-1 text-xl font-medium">Let's get started</h1>
          <p class="mb-4 text-base-content/60">
            Laravel has an incredibly rich ecosystem.<br />
            We suggest starting with the following.
          </p>

          <!-- vertical steps, switch to horizontal on lg -->
          <Steps direction="vertical" class="mb-6 lg:steps-horizontal lg:mb-8">
            <Step :index="1" status="primary">
              Read the
              <Button as="a" href="https://laravel.com/docs" target="_blank" variant="text" size="sm" class="ml-1">
                Documentation
                <svg class="h-4 w-4 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 11" stroke="currentColor">
                  <path stroke-linecap="square" d="M7.708 6.958V2.792H3.542M2.5 8l5-5" />
                </svg>
              </Button>
            </Step>
            <Step :index="2" status="primary">
              Watch video tutorials at
              <Button as="a" href="https://laracasts.com" target="_blank" variant="text" size="sm" class="ml-1">
                Laracasts
                <svg class="h-4 w-4 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 11" stroke="currentColor">
                  <path stroke-linecap="square" d="M7.708 6.958V2.792H3.542M2.5 8l5-5" />
                </svg>
              </Button>
            </Step>
          </Steps>

          <Button as="a" href="https://cloud.laravel.com" target="_blank" variant="text" size="md"> Deploy now </Button>
        </div>

        <!-- right panel -->
        <div
          class="relative -mb-px aspect-[335/376] w-full shrink-0 overflow-hidden rounded-t-lg bg-secondary lg:mb-0 lg:-ml-px lg:aspect-auto lg:w-[438px] lg:rounded-tr-none lg:rounded-r-lg"
        >
          <!-- slot your SVG or image here -->
          <slot name="artwork" />
        </div>
      </main>
    </div>

    <div class="hidden h-14 lg:block"></div>
  </div>
</template>
