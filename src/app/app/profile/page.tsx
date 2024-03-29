import { getSession } from "@/lib/auth";
import PageLayout from "../_components/page-layout";
import ProfileForm from "./_components/profile-form";

export default async function Profile() {
    const session = await getSession();

    if (!session) return null;

    return (
        <PageLayout
            title="Profile"
            description="Update your personal profile. This will be visible only for current real-time matches and premium users."
        >
            <ProfileForm profile={session.user} />
        </PageLayout>
    );
}
