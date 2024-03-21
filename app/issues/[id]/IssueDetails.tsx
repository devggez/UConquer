import { IssueStatusBadge } from '@/app/components'
import { Issue } from '@prisma/client'
import { Text, Heading, Flex, Card } from '@radix-ui/themes'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const IssueDetails = ({issue} : {issue: Issue}) => {
    return (
        <div>
            <div className='space-y-4'>
                <Heading>{issue.title}</Heading>
                <Flex className='space-x-3 ' my='2'>
                    <IssueStatusBadge status={issue.status}></IssueStatusBadge>
                    <Text>{issue.createdAt.toDateString()}</Text>
                </Flex>
                <Card className='prose' mt="4"><ReactMarkdown>{issue.description}</ReactMarkdown></Card>
            </div>
        </div>
    )
}

export default IssueDetails