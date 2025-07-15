<script setup lang="ts">
  import AppLayout from "@/layouts/AppLayout.vue";
  import { type BreadcrumbItem } from "@/types";
  import { Head } from "@inertiajs/vue3";

  // Import the accordion components
  import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

  // Import the dynamically-loaded sample data
  import { componentData } from "@/data/components";

  // Define a type for our accordion data for better type safety
  interface AccordionItemData {
    value: string;
    title: string;
    content: string;
  }

  // Cast the imported data to our specific type
  const accordionItems = componentData.accordionItems as AccordionItemData[];

  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: "Components",
      href: "/components",
    },
  ];
</script>

<template>
  <Head title="Component Library" />

  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="flex h-full flex-1 flex-col gap-8 p-4 md:p-8 overflow-x-auto">
      <!-- Accordion Section -->
      <div class="space-y-2">
        <h2 class="text-2xl font-bold tracking-tight text-foreground">Accordion</h2>
        <p class="text-muted-foreground">A vertically stacked set of interactive headings that each reveal a section of content.</p>
      </div>

      <div class="w-full max-w-2xl rounded-xl border border-border bg-card text-card-foreground shadow-sm">
        <div class="p-6">
          <Accordion type="single" class="w-full" collapsible default-value="item-1">
            <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
              <AccordionTrigger>{{ item.title }}</AccordionTrigger>
              <AccordionContent>
                <p class="p-2">{{ item.content }}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <!-- We can add more component sections here as we build them -->
    </div>
  </AppLayout>
</template>
