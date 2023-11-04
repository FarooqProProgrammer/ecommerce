import { Flex, Image, Input, InputGroup, InputRightAddon, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import GooglePlay from "../../assets/GooglePlay.png"
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <footer class="text-white bg-black body-font">
            <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                    <h3 className='text-xl'>Download App</h3>
                    <p className="text-md text-gray-400">Save $3 with App New User Only</p>
                    <Flex
                        flexDirection={'column'}
                        justifyContent={'start'}
                        alignItems={'start'}
                        gap={3}
                        mt={4}
                    >
                        <Link className='underline'>Get it One Google Play</Link>

                    </Flex>
                </div>
                <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-white tracking-widest text-xl mb-3">Exclusive</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-white hover:text-gray-200">Subscribe</a>
                            </li>
                            <Flex flexDirection={'column'} justifyContent={'start'} alignItems={'start'} gap={1}>
                                <Text>Get 10% off your first order</Text>
                                <InputGroup>
                                    <Input type='text' bgColor={'white'} placeholder='Enter Your Ammount' />
                                    <InputRightAddon children={<AiOutlineSend color='black' />} />
                                </InputGroup>

                            </Flex>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Support</h2>
                        <nav class="list-none mb-10 space-y-4">
                            <li>
                                <a class="text-white hover:text-gray-200">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a>
                            </li>
                            <li>
                                <a class="text-white hover:text-gray-200">exclusive@gmail.com</a>
                            </li>
                            <li>
                                <a class="text-white hover:text-gray-200">+88015-88888-9999</a>
                            </li>

                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Account</h2>
                        <nav class="list-none mb-10 space-y-4">
                            <li>
                                <a class="text-white hover:text-gray-200">My Account</a>
                            </li>
                            <li>
                                <a class="text-white hover:text-gray-200">Login / Register</a>
                            </li>
                            <li>
                                <a class="text-white hover:text-gray-200">Cart</a>
                            </li>
                            <li>
                                <a class="text-white hover:text-gray-200">Wishlist</a>
                            </li>
                            <li>
                                <a class="text-white hover:text-gray-200">Shop</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Quick Links</h2>
                        <nav class="list-none mb-10 space-y-4">
                            <li>
                                <a class="text-white hover:text-gray-200">Privacy Policy</a>
                            </li>
                            <li>
                                <a class="text-white hover:text-gray-200">Terms Of Use</a>
                            </li>
                            <li>
                                <a class="text-white hover:text-gray-200">Faq</a>
                            </li>
                            <li>
                                <a class="text-white hover:text-gray-200">Contact</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>

        </footer>
    )
}
