import type { ContactFormValues } from "@/lib/types";

export async function submitContactForm(
  values: ContactFormValues,
): Promise<{ ok: boolean }> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  return response.json() as Promise<{ ok: boolean }>;
}
