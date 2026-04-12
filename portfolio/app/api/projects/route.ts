import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY!,
);

export async function GET() {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) return Response.json({ error }, { status: 500 });
  return Response.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { data, error } = await supabase.from("projects").insert(body);
  if (error) return Response.json({ error }, { status: 500 });
  return Response.json(data, { status: 201 });
}
