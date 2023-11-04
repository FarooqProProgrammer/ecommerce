import { Text } from '@chakra-ui/react'
import React from 'react'

export default function Label({text}) {
  return (
    <div className='w-full flex  justify-start items-center gap-2'>
      <div className='w-[30px] h-[50px] bg-red-600' />
      <Text className='text-red-600'>{text}</Text>

    </div>
  )
}
