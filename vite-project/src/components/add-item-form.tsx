

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { singleItem } from "@/type";
import { useForm } from "react-hook-form";



const AddItemForm = ({addItem}: {addItem: (newItem:singleItem[]) => void}) => {
  const form = useForm({
    defaultValues: {
      title: "",
      finish: false
    }
  }
  )

  const onSubmit = (values: singleItem) => {
    addItem([values])
  }

  return (
    <Form  {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex w-full p-2">
          <div className="w-[60%] mr-1">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add to list</FormLabel>
                  <FormControl>
                    <Input className="ring-indigo-100" placeholder="add list to do"  {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="relative w-[20%]"><Button className="absolute bottom-0 bg-indigo-500" type="submit">+</Button></div>
        </div>
      </form>
    </Form>
  );
}




export { AddItemForm };

