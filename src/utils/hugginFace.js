// utils/hugginFace.js
// Client always calls the same endpoint. Works locally (proxy) and when deployed (firebase rewrite).
export default async function hfChat(promptOrMessages) {
  const payload = {};

  if (typeof promptOrMessages === "string") {
    payload.prompt = promptOrMessages;
  } else {
    payload.messages = promptOrMessages;
  }

  const res = await fetch("/api/hf-chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error("hf proxy error: " + text);
  }
  const data = await res.json();
  return data.reply;
}
