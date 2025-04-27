import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const policyText = `## سياسة المواعيد

نطلب إشعارًا قبل 24 ساعة للإلغاءات. قد تخضع الإلغاءات المتأخرة أو عدم الحضور لرسوم.

## الصحة والسلامة

صحتكم وسلامتكم على رأس أولوياتنا. نلتزم بإرشادات صارمة للنظافة.
`;

export default function PolicyPage() {
    return (
        <div className="container mx-auto py-10 flex flex-col items-end">
            <h1 className="text-3xl font-semibold mb-6">سياساتنا</h1>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="text-right">سياساتنا</CardTitle>
                </CardHeader>
                <CardContent>
                    <PolicySection text={policyText} />
                </CardContent>
            </Card>
        </div>
    );
}

function PolicySection({ text }: { text: string }) {
    return (
        <div className="prose flex flex-col items-end text-right">
            {text.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
}
