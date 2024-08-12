import db from "@/lib/db";
import { formatToTimeAgo } from "@/lib/utils";
import { notFound } from "next/navigation";

async function getTweet(id: number) {
	await new Promise(resolve => setTimeout(resolve, 1 * 1000));
	const tweet = await db.tweet.findUnique({
		where: {
			id,
		},
		include: {
			user: {
				select: {
					username: true,
				},
			},
		},
	});
	return tweet;
}

export default async function TweetDetail({ params }: { params: { id: string } }) {
	const id = Number(params.id);
	const tweet = await getTweet(id);
	if (isNaN(id)) {
		return notFound();
	}
	if (!tweet) {
		return notFound();
	}
	return (
		<div className="flex flex-col gap-5 px-5 pt-6 *:w-full">
			<article className="flex gap-5 ">
				<div className="bg-gray-500 size-28 rounded-md" />
				<div className="flex flex-col gap-3  w-4/5 ">
					<div className="flex flex-row justify-between *:text-sm">
						<h4 className="font-semibold">{tweet.user.username}</h4>
						<span>{formatToTimeAgo(tweet.created_at.toString())}</span>
					</div>
					<p className="w-full">{tweet.context}</p>
				</div>
			</article>
		</div>
	);
}
