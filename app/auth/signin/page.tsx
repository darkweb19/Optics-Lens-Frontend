"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useToast } from "@/hooks/use-toast";

export default function SignInPage() {
	const router = useRouter();
	const { toast } = useToast();
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		const formData = new FormData(e.currentTarget);
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;

		try {
			const result = await signIn("credentials", {
				email,
				password,
				redirect: false,
			});

			if (result?.error) {
				toast({
					title: "Error",
					description: "Invalid credentials",
					variant: "destructive",
				});
			} else {
				router.push("/");
				router.refresh();
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center">
			<div className="mx-auto w-full max-w-md space-y-6 p-6">
				<div className="space-y-2 text-center">
					<h1 className="text-3xl font-bold">Welcome back</h1>
					<p className="text-gray-500">Sign in to your account</p>
				</div>

				<div className="space-y-4">
					<Button
						variant="outline"
						className="w-full"
						onClick={() => signIn("google", { callbackUrl: "/" })}
						disabled={isLoading}
					>
						Continue with Google
					</Button>

					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t" />
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="bg-background px-2 text-muted-foreground">
								Or continue with
							</span>
						</div>
					</div>

					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<Input
								type="email"
								name="email"
								placeholder="Email"
								required
								disabled={isLoading}
							/>
						</div>
						<div>
							<Input
								type="password"
								name="password"
								placeholder="Password"
								required
								disabled={isLoading}
							/>
						</div>
						<Button
							type="submit"
							className="w-full"
							disabled={isLoading}
						>
							{isLoading ? "Loading..." : "Sign In"}
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}
