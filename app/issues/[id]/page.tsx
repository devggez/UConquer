import Prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: { id: string }
}

const IssueDetailPage = async ({ params }: Props) => {
    if (typeof params.id !== 'number') return notFound();

    const issue = await Prisma.issue.findUnique({
        where: { id: parseInt(params.id)}
    })

    if(!issue) return notFound();

    return (
        <div>
            <p> {issue.title} </p>
            <p> {issue.description} </p>
            <p> {issue.status} </p>
            <p> {issue.createdAt.toDateString()} </p>
        </div>
    )
}

export default IssueDetailPage