import { Pencil2Icon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

const EditIssueButton = ({issueId} : {issueId: number}) => {
    return (
        <div>
            <Button>
                <Pencil2Icon></Pencil2Icon>
                <Link href={`/issues/${issueId}/edit`}> Edit issue </Link>
            </Button>
        </div>
    )
}

export default EditIssueButton