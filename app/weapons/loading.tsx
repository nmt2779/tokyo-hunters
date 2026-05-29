import { Skeleton } from "../_components/ui/Skeleton";

export default function Loading() {
  return (
    <main className="th-canvas">
      <section className="th-section">
        <Skeleton width={160} height={14} />
        <Skeleton width="60%" height={64} style={{ marginTop: 16 }} />
        <Skeleton width="40%" height={64} />
        <div
          className="grid-5"
          style={{ marginTop: 32, gap: 16 }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="col" style={{ gap: 10 }}>
              <Skeleton width="100%" height={0} style={{ aspectRatio: "1 / 1" }} radius={0} />
              <Skeleton width="80%" height={14} />
              <Skeleton width="55%" height={12} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
