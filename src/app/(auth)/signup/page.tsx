import AuthCard from "../_components/auth-card";

export default function Signup() {
    return (
        <AuthCard
            variant="signup"
            title="Sign Up"
            description="Create a new account to start meeting amazing people!"
            footer={{
                text: "Already have an account?",
                link: {
                    href: "/login",
                    children: "Log in",
                },
            }}
        />
    );
}
