import UnorderListsContent from "@/components/UI/UnorderListContent";

export default function SystemDesignPage() {
  return (
    <div className="px-12 py-4">
      <h1 className="pb-4 text-lg font-semibold">System Design</h1>
      <div className="space-y-4">
        <div className="font-medium italic">
          "Design a news article system like AJC"
        </div>
        <div>
          <div>Gather Requirements</div>
          <UnorderListsContent
            lis={[
              `Clarify scope: "Are we building the full platform or focusing on the
            article reading experience?"`,
              `Scale: "How many concurrent users? Articles per day?"`,
              `Key features: "Real-time comments? Social sharing? Personalization?"`,
            ]}
          />
        </div>

        <div>
          <div>High Level Architecture</div>
          <UnorderListsContent
            lis={[
              "Client (React/Next.js app)",
              "CDN layer (CloudFront, etc.)",
              "API Gateway",
              "Backend services",
              "Database layer",
              "Caching strategy",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
