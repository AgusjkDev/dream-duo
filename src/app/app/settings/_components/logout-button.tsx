import { Button } from "@/components/ui/button";
import { logout } from "@/lib/auth";

export default function LogoutButton() {
    return (
        <form action={logout}>
            <Button variant="outline" className="self-start">
                Logout
            </Button>
        </form>
    );
}
