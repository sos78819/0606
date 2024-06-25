

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { singleItem } from "@/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PlusIcon } from "./ui/plus";

const FormSchema = z.object({
  title: z.string().min(1, {
    message: "Todo Title must be at least 1 characters.",
  }),
})
const AddItemForm = ({ addItem }: { addItem: (newItem: singleItem[]) => void }) => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id:"",     
      title: "",
      finish: false
    }
  }
  )

  const onSubmit = (values: singleItem) => {
   const addValue={...values,id:Math.random().toString(36).substring(2,12),finish:false}
   addItem([addValue])
  }


  return (
    <Form  {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex w-full p-2 ">
          <div className="mr-1 w-[80%]">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add to list</FormLabel>
                  <FormControl>
                    <div className="flex w-full">
                      <Input className="ring-indigo-100 mr-2" placeholder="add list to do"  {...field} />
                      <Button className="bg-indigo-500" type="submit"><PlusIcon/></Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  );
}




export { AddItemForm };

