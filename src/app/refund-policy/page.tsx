import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Read the Selfy refund policy covering refund eligibility, non-refundable deposits, request procedures, and processing times for our photo booth services.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <LegalShell label="Legal" title="Refund Policy" lastUpdated="December 12, 2023">
      <h2>1. Agreement to Terms</h2>
      <p>
        By engaging the services of Selfy, clients agree to abide by the terms outlined in this refund
        policy. Payment for our services indicates acknowledgment and acceptance of these conditions.
      </p>

      <h2>2. Refund Eligibility</h2>
      <p>
        Selfy strives to provide the best open-air photo booth experience. We prioritise customer
        satisfaction and ensure our services are delivered to the highest standards. Refunds will only be
        issued under specific circumstances:
      </p>

      <h2>3. Major Issues</h2>
      <p>
        Refunds will be considered if there is a major issue on the company&apos;s side that significantly
        impacts the quality or delivery of the service agreed upon. These issues may include, but are not
        limited to, technical malfunctions, failure to provide the agreed-upon service, or circumstances
        beyond our control that hinder the successful execution of the event.
      </p>

      <h2>4. Non-Refundable Deposits</h2>
      <p>
        All security deposits provided to secure an event date with Selfy are non-refundable. This deposit
        ensures the reservation of equipment, resources, and staffing specifically for your event and is
        non-transferrable to another event or individual.
      </p>

      <h2>5. Process for Refund Requests</h2>
      <p>
        To request a refund, clients must contact Selfy within 7 days after the event date or upon the
        identification of the issue. Refund requests must be made in writing and include detailed
        information about the issue or circumstances that warrant a refund.
      </p>

      <h2>6. Review and Consideration</h2>
      <p>
        Each refund request will be individually reviewed and considered by Selfy. Refunds will be issued
        at the sole discretion of the company based on the assessment of the situation and adherence to the
        outlined refund eligibility criteria.
      </p>

      <h2>7. No Refunds for Client-Caused Issues</h2>
      <p>
        Refunds will not be provided for issues caused by the client, including but not limited to changes
        in event details, schedule alterations, or dissatisfaction due to personal preferences that do not
        align with the agreed-upon service.
      </p>

      <h2>8. Refund Processing Time</h2>
      <p>
        If a refund is approved, it will be processed within 30 days from the date of approval. Refunds
        will be issued using the same method as the original payment.
      </p>

      <h2>9. Contact Information for Refund Requests</h2>
      <p>
        For refund requests or further clarification regarding our refund policy, please contact us at{" "}
        <a href="mailto:hello@selfy.photo">hello@selfy.photo</a>.
      </p>
    </LegalShell>
  );
}
