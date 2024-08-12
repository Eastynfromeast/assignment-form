import { formatToTimeAgo } from "@/lib/utils";
import Link from "next/link";

interface TweetListProps {
	id: number;
	context: string;
	created_at: Date;
	user: {
		id: number;
		username: string;
	};
	updated_at: Date;
}

export default function TweetListItem({ context, id, created_at, user: { username } }: TweetListProps) {
	return (
		<li className="w-full">
			<Link href={`/tweets/${id}`} className="flex gap-5 border-b-gray-500 border-b-[1px] pb-4">
				<div className="bg-gray-500 size-28 rounded-md" />
				<div className="flex flex-col gap-2 ">
					<h4>{username}</h4>
					<p>{context}</p>
					<span>{formatToTimeAgo(created_at.toString())}</span>
				</div>
			</Link>
		</li>
	);
}
