import { Card } from "@/components/ui/card";
import { ReactNode } from 'react';
const TodoCard = ({children}:{children:ReactNode}) => {
  return <div className="flex justify-center items-center w-full h-svh">
    <Card className='w-4/12  bg-gradient-to-b from-indigo-100 to-indigo-200  pt-6 pl-2 md:w-10/12 sm:w-12/12'>
      {children}
    </Card>
  </div>
}

export { TodoCard };

