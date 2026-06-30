export function SpecificationsTable({ specifications }: { specifications: unknown }) {
  const entries = specifications && typeof specifications === "object" && !Array.isArray(specifications)
    ? Object.entries(specifications as Record<string, string>)
    : [];

  if (!entries.length) return null;

  return (
    <div className="overflow-hidden rounded-md border border-slate-200">
      <table className="w-full text-sm">
        <tbody>
          {entries.map(([key, value]) => (
            <tr key={key} className="border-b border-slate-200 last:border-0">
              <th className="w-1/3 bg-mist px-4 py-3 text-left font-semibold text-charcoal">{key}</th>
              <td className="px-4 py-3 text-mutedText">{String(value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
