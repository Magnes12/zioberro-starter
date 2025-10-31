export async function POST(req) {
  const data = await req.json();

  const response = await fetch("https://script.google.com/macros/s/AKfycbzVAsZce7QEXkutXn3JKqATOsMkuFq42AeqFq1K6ESWCj_5nzfqTgHthSHpSvT6ulLTvg/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.text();
  return new Response(result, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}
