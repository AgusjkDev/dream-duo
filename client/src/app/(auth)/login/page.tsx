import AuthCard from "../_components/auth-card";

export default function Login() {
    return (
        <AuthCard
            variant="login"
            title="Log In"
            description="Enter your credentials to access your account."
            footer={{
                text: "Don't have an account?",
                link: {
                    href: "/signup",
                    children: "Sign Up",
                },
            }}
        />
    );
}
