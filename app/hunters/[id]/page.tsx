import { HUNTERS } from "../../_components/wireframe-home";
import { PageHunterDetail } from "../../_components/wireframe-pages-1";

export function generateStaticParams() {
  return HUNTERS.map((hunter) => ({ id: hunter.id }));
}

export default async function HunterDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <PageHunterDetail id={id} />;
}
