"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { ContactSchema } from "@/schema";
import { useState, useTransition } from "react";
import { Slide } from "../animations/Slide";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import emailjs from "@emailjs/browser";
import { ImagePreview } from "../animations/image-preview";

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ContactSchema>) => {
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
      )
      .then((res) => {
        setError("");
        setSuccess(
          "Your message has been sent successfully. I will get back to you soon.",
        );
      })
      .catch((error) => {
        setError(
          "Some error occurred. Please send me a direct mail using below mail address",
        );
        setSuccess("");
      });
  };
  return (
    <Card className='w-full shadow-md bg-transparent text-white rounded-sm border border-transparent font-incognito'>
      <CardHeader>
        <CardTitle className='text-5xl'>
          <ImagePreview image='/contact.gif'>Contact Me</ImagePreview>
        </CardTitle>
        <p className='text-gray-200/80 text-base'>
          Feel free me message me on any queries or for any collaboration
        </p>
      </CardHeader>
      <Slide delay={0.1}>
        <CardContent>
          <Form {...form}>
            <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
              <div className='space-y-10'>
                <div className='grid sm:grid-cols-2 gap-6 grid-cols-1'>
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-lg'>Name</FormLabel>
                        <FormControl className=''>
                          <Input
                            {...field}
                            placeholder='Name'
                            disabled={isPending}
                            className='bg-transparent text-white border border-gray-500 focus:border-cyan-400'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-lg'>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder='Email'
                            disabled={isPending}
                            className='bg-transparent text-white border border-gray-500 focus:border-cyan-400'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-lg'>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder='Type your message here'
                          disabled={isPending}
                          className='bg-transparent text-white border border-gray-500 focus:border-cyan-500 h-32 resize-none'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <ImagePreview image='/send.gif'>
                    <Button
                      type='submit'
                      variant='secondary'
                      className='w-full'
                    >
                      Let&apos;s Talk
                    </Button>
                  </ImagePreview>
                </div>
                <FormError message={error} />
                <FormSuccess message={success} />
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className='py-4'>
          <p className='text-gray-200/80 text-base'>
            In case of <span className='text-amber-500/80'>error</span> feel
            free to drop mail on{" "}
            <span className='text-cyan-500/90'>rajthombare3524@gmail.com</span>{" "}
          </p>
        </CardFooter>
      </Slide>
    </Card>
  );
}
