
import { connection } from "next/server";

export default async function MemoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await connection();

  const { id } = await params;

  return <h1>{id}번 메모 상세 페이지</h1>;
}
