import React from 'react'
import { Card } from "@chakra-ui/react"


export default function CategoryCard() {
    return (
        <Card align='center'>
            <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
                <Button colorScheme='blue'>View here</Button>
            </CardFooter>
        </Card>
    )
}
