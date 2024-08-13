import TweetDetailItem from "@/components/tweet/tweet-detail-item";
import db from "@/lib/db";
import { formatToTimeAgo } from "@/lib/utils";
import { Prisma } from "@prisma/client";
import { notFound } from "next/navigation";

async function getTweet(id: number) {
	await new Promise(resolve => setTimeout(resolve, 1 * 1000));
	const tweet = await db.tweet.findUnique({
		where: {
			id,
		},
		select: {
			id: true,
			created_at: true,
			updated_at: true,
			context: true,
			user: {
				select: {
					id: true,
					username: true,
				},
			},
		},
	});
	return tweet;
}

export type TweetDetail = Prisma.PromiseReturnType<typeof getTweet>;

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
			<TweetDetailItem tweet={tweet} />
			<section className=" border-t-[1px] border-dashed border-neutral-500 mt-10 py-4">
				<h4 className="font-semibold text-lg">Replies</h4>
				<ul className="flex flex-col gap-5">
					<li className="w-full mt-4 flex gap-5">
						<div className="bg-gray-500 size-28 rounded-md" />
						<div className="flex flex-col gap-3  w-4/5 ">
							<div className="flex flex-row justify-between *:text-sm">
								<h4 className="font-semibold">Other</h4>
								<span>N일 전</span>
							</div>
							<p className="w-full">(답글이 작성될 예정입니다.)</p>
						</div>
					</li>
				</ul>
			</section>
		</div>
	);
}
