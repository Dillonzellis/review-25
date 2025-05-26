type UnorderListsContentProps = {
  lis: string[];
};

export default function UnorderListsContent({ lis }: UnorderListsContentProps) {
  return (
    <ul className="list-inside list-disc pb-1">
      {lis.map((li, idx) => (
        <li key={idx} className="pb-1">
          {li}
        </li>
      ))}
    </ul>
  );
}
