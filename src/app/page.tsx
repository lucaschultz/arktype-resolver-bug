"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { arktypeResolver } from "@hookform/resolvers/arktype";
import { type } from "arktype";
import { useForm } from "react-hook-form";

const Schema = type({
  name: "string",
  age: "parse.number",
  email: "email",
});

export default function Home() {
  const form = useForm<typeof Schema.infer>({
    resolver: arktypeResolver(Schema),
    defaultValues: {
      name: "",
      age: 0,
      email: "",
    },
  });

  return (
    <main className="flex h-full max-h-screen overflow-y-auto items-center justify-center">
      <div className="max-w-4xl w-full p-8 bg-white rounded-xl shadow-lg space-y-8">
        <h1 className="font-medium text-lg">Arktype Hook Resolver Test</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => console.log(values))}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Peter" {...field} />
                  </FormControl>
                  <FormDescription>
                    How would you like us to call you?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="26" {...field} />
                  </FormControl>
                  <FormDescription>
                    Boomer or not, that is the question.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail</FormLabel>
                  <FormControl>
                    <Input placeholder="peter@mail.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    Where can we reach you? Don&apos;t worry, we won&apos;t spam you!
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
