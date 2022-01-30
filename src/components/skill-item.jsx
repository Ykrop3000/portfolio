/** @format */

import {
  useColorModeValue,
  Stack,
  List,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/layout";


function SkillItem({skillTitle, skills, delay=0.2}){
    return (
        <Stack
        direction={"column"}
        borderRadius='lg'
        p={3}
        h={'100%'}
        w={'100%'}
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}>
            <Heading textAlign={"center"} size={"sm"} as='h4'>
                {skillTitle}
            </Heading>
            <UnorderedList pl={5}>
                {skills.map((skill,id) => <ListItem key={id}> {skill} </ListItem>)}
            </UnorderedList>
        </Stack>
    )
}

export default SkillItem