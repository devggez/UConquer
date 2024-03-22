import { IssueStatusBadge } from "@/app/components";
import prisma from '@/prisma/client';
import { Table } from "@radix-ui/themes";
import delay from 'delay';
import Link from 'next/link';
import IssuesAction from './IssuesAction';

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  await delay(500);
  return (
    <div className='space-y-3'>
      <IssuesAction></IssuesAction>

      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map(issue => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className='inline-block md:hidden ml-3'>
                  <IssueStatusBadge status={issue.status}></IssueStatusBadge>
                </div>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>
                <IssueStatusBadge status={issue.status}></IssueStatusBadge>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

    </div>
  )
}

export const dynamic = 'force-dynamic';

export default IssuesPage