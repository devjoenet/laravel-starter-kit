<script setup lang="ts">
  import InputError from "@/components/InputError.vue";
  import TextLink from "@/components/TextLink.vue";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import AuthBase from "@/layouts/auth/AuthCardLayout.vue";
  import { Head, useForm } from "@inertiajs/vue3";
  import { LoaderCircle } from "lucide-vue-next";

  const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const submit = () => form.post(route("register"), { onFinish: () => form.reset("password", "password_confirmation") });
</script>

<template>
  <AuthBase title="Create an account" description="Enter your details below to create your account">
    <Head title="Register" />

    <form @submit.prevent="submit" class="flex flex-col gap-6">
      <div class="grid gap-6">
        <div class="grid gap-2">
          <Input id="name" name="name" type="text" :required="true" :autofocus="true" :tabindex="1" autocomplete="name" v-model="form.name" label="Full Name" />
          <InputError :message="form.errors.name" />
        </div>

        <div class="grid gap-2">
          <Input id="email" name="name" type="email" required="true" :tabindex="2" autocomplete="email" v-model="form.email" label="Email Address" />
          <InputError :message="form.errors.email" />
        </div>

        <div class="grid gap-2">
          <Input id="password" name="password" type="password" required="true" :tabindex="3" autocomplete="new-password" v-model="form.password" label="Password" />
          <InputError :message="form.errors.password" />
        </div>

        <div class="grid gap-2">
          <Input
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            required="true"
            :tabindex="4"
            autocomplete="new-password"
            v-model="form.password_confirmation"
            label="Confirm password"
          />
          <InputError :message="form.errors.password_confirmation" />
        </div>

        <Button variant="filled" type="submit" class="mt-2 w-full" tabindex="5" :disabled="form.processing">
          <LoaderCircle v-if="form.processing" class="h-4 w-4 animate-spin" />
          Create account
        </Button>
      </div>

      <div class="text-center text-sm text-muted-foreground">
        Already have an account?
        <TextLink :href="route('login')" class="underline underline-offset-4" :tabindex="6">Log in</TextLink>
      </div>
    </form>
  </AuthBase>
</template>
