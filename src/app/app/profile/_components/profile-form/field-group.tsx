interface FieldGroupProps {
    title: string;
    children: React.ReactNode;
}

export default function FieldGroup({ title, children }: Readonly<FieldGroupProps>) {
    return (
        <div className="flex flex-col gap-y-3">
            <h3 className="font-medium underline underline-offset-4">{title}</h3>

            <div className="flex flex-col gap-y-6">{children}</div>
        </div>
    );
}
