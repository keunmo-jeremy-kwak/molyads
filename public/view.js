const params = new URLSearchParams(window.location.search);
const media = params.get("media");
const userkey = params.get("userkey");

console.log("📦 media:", media);
console.log("📦 userkey:", userkey);

fetch("https://ot-tracker-api.onrender.com/track/view", {
  method: "POST",
  body: JSON.stringify({ media, userkey, event: "view" }),
  headers: { "Content-Type": "application/json" },
}).then(() => {
  console.log("✅ 전송 완료!");
}).catch((err) => {
  console.error("❌ 전송 실패", err);
});
