"use client";

import { useFormState } from "react-dom";
import FormButton from "../form-button";
import TextArea from "../text-area";
import addTweet from "@/app/(tabs)/tweets/action";

export default function AddTweet() {
	const [state, dispatch] = useFormState(addTweet, null);
	return (
		<div className="grid grid-cols-[126px_1fr] gap-5 my-5 mb-10 w-full">
			<div className="bg-gray-500 size-28 rounded-md"></div>
			<form action={dispatch} className="flex flex-col gap-2 w-full">
				<TextArea name="newTweet" placeholder="어떤 일이 있었나요?" errors={state?.fieldErrors.newTweet} />
				<FormButton text="Add tweet!" />
			</form>
		</div>
	);
}
