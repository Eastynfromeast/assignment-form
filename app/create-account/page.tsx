import FormButton from "@/components/form-button";
import FormHeader from "@/components/form-header";
import FormInput from "@/components/form-input";

export default function CreateAccount() {
	return (
		<div className="flex flex-col pt-20 px-10">
			<FormHeader title="Join Us" />
			<form className="flex flex-col gap-3">
				<FormInput name="email" icon="💌" type="email" placeholder="Email" required errors={[]} />
				<FormInput name="username" icon="👤" type="text" placeholder="Username" required errors={[]} />
				<FormInput name="password" icon="🔑" type="password" placeholder="Password" required errors={[]} />
				<FormInput name="confirmPassword" icon="✔️" type="password" placeholder="Confirm Password" required errors={[]} />
				<FormButton text="Create Account!" />
			</form>
		</div>
	);
}
