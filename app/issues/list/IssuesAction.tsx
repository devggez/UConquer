import { Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import IssueStatusFilter from './IssueStatusFilter'

const IssuesAction = () => {
    return (
        <Flex mb="5" justify='between'>
            <IssueStatusFilter />
            <Button><Link href='/issues/new'>Add an issue</Link></Button>
        </Flex>
    )
}

export default IssuesAction