import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

const policyText = `
## Appointment Policy

We require 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a fee.

## Health and Safety

Your health and safety are our top priorities. We adhere to strict sanitation guidelines.
`;

export default function PolicyPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Our Policies</CardTitle>
        </CardHeader>
        <CardContent>
          <PolicySection text={policyText} />
        </CardContent>
      </Card>
    </div>
  );
}

function PolicySection({text}: {text: string}) {
  return (
    <div className="prose">
      {text.split('\n\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
