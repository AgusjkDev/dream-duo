import PageLayout from "../_components/page-layout";
import LogoutButton from "./_components/logout-button";

export default function Settings() {
    return (
        <PageLayout
            title="Settings"
            description="Tweak your experience in Dream Duo as much as you want!"
        >
            <LogoutButton />
        </PageLayout>
    );
}
