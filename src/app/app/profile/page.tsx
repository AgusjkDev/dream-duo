import PageLayout from "../_components/page-layout";
import ProfileForm from "./_components/profile-form";

export default function Profile() {
    return (
        <PageLayout
            title="Profile"
            description="Update your personal profile. This will be visible only for current real-time matches and premium users."
        >
            <ProfileForm />
        </PageLayout>
    );
}
