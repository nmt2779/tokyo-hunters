import { Skeleton } from "../../_components/ui/Skeleton";

export default function Loading() {
  return (
    <main className="th-canvas">
      <section
        className="th-section"
        style={{ paddingTop: "clamp(28px, 4vw, 56px)" }}
      >
        <div className="split image-r">
          <div className="col" style={{ gap: 14 }}>
            <Skeleton width={140} height={20} />
            <Skeleton width="80%" height={48} />
            <Skeleton width="60%" height={48} />
            <Skeleton width="100%" height={14} style={{ marginTop: 12 }} />
            <Skeleton width="92%" height={14} />
            <Skeleton width="70%" height={14} />
            <div className="row" style={{ gap: 12, marginTop: 20, flexWrap: "wrap" }}>
              <Skeleton width={180} height={48} radius={2} />
              <Skeleton width={180} height={48} radius={2} />
            </div>
          </div>
          <Skeleton
            width="100%"
            height={520}
            radius={0}
            style={{ aspectRatio: "3 / 4" }}
          />
        </div>
      </section>
    </main>
  );
}
