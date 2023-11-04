import React from 'react'
import LoginImg from "../../../assets/loginBg.jpeg"
import { Button, Flex, Input, Text } from '@chakra-ui/react'



export default function Login() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={LoginImg}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Log in to Exclusive
          </h1>
          <p className="mb-8 leading-relaxed">
            Enter Your Details Below
          </p>
          <div className='w-full mb-3 space-y-2'>
            <Flex flexDirection={'column'} justifyContent={'start'} alignItems={'start'} gap={1}>
              <Text>Email: </Text>
              <Input type='text' placeholder='Enter Email' />
            </Flex>
            <Flex flexDirection={'column'} justifyContent={'start'} alignItems={'start'} gap={1}>
              <Text>Password: </Text>
              <Input type='password' placeholder='Enter Password' />
            </Flex>


          </div>

          <div className="flex justify-center gap-3">
            <Button variant={'outline'} bgColor={"#DB4444"} color={"#fff"}>Login</Button>

            <Button variant={'solid'} color={'#DB4444'}>Forgot Password</Button>
          </div>
        </div>
      </div>
    </section>

  )
}
