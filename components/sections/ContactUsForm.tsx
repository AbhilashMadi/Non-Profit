"use client"

import { FC } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@ui/form";
import { Input } from "@ui/input";
import { Textarea } from "@ui/textarea";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/card";

enum FormKeys {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  PHONE = "phone",
  EMAIL = "email",
  COUNTRY = "country",
  ADDRESS = "address",
  MESSAGE = "message",
}

const formSchema = z.object({
  [FormKeys.FIRST_NAME]: z.string(),
  [FormKeys.LAST_NAME]: z.string(),
  [FormKeys.PHONE]: z.string(),
  [FormKeys.EMAIL]: z.string().email(),
  [FormKeys.COUNTRY]: z.string(),
  [FormKeys.ADDRESS]: z.string(),
  [FormKeys.MESSAGE]: z.string(),
})

const ContactUsForm: FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      country: "India",
      address: "",
      message: "",
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  }

  return (<section className="container mb-12">
    <Card>
      <CardHeader>
        <CardTitle className="text-center">
          Contact Us
        </CardTitle>
      </CardHeader>
      <CardContent className="p-10 pt-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name={FormKeys.FIRST_NAME}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={FormKeys.LAST_NAME}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={FormKeys.PHONE}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={FormKeys.EMAIL}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={FormKeys.COUNTRY}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Country" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={FormKeys.ADDRESS}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-max">Submit &#x2B9E;</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  </section>)
}

export default ContactUsForm