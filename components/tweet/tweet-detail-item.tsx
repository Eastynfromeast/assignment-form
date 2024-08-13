import { TweetDetail } from "@/app/(tabs)/tweets/[id]/page";
import { formatToTimeAgo } from "@/lib/utils";

interface TweetDetailItemProps {
	tweet: TweetDetail;
}

export default function TweetDetailItem({ tweet }: TweetDetailItemProps) {
	return (
		<article className="flex gap-5 ">
			<div className="bg-gray-500 size-28 rounded-md" />
			<div className="flex flex-col gap-3  w-4/5 ">
				<div className="flex flex-row justify-between *:text-sm">
					<h4 className="font-semibold">{tweet?.user.username}</h4>
					<span>{tweet ? formatToTimeAgo(tweet.created_at.toString()) : "unknown date"}</span>
				</div>
				<p className="w-full">{tweet?.context}</p>
			</div>
		</article>
	);
}
