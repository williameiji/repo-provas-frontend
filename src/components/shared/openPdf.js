import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
	process.env.REACT_APP_SUPABASE_URL,
	process.env.REACT_APP_SUPABASE_KEY
);

export async function openUrl(pdf) {
	const link = pdf.replace("repoprovas", "");

	const { data } = supabase.storage.from("repoprovas").getPublicUrl(`${link}`);

	window.open(`${data.publicURL}`);
}
