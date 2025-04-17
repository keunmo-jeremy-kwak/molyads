const params = new URLSearchParams(window.location.search);
const media = params.get("media");
const userkey = params.get("userkey");

console.log("📦 media:", media);
console.log("📦 userkey:", userkey);

const key = `ot_complete_${userkey}`;

if (!sessionStorage.getItem(key)) {
  fetch("https://ot-tracker-api.onrender.com/track/complete", {
    method: "POST",
    body: JSON.stringify({ media, userkey, event: "complete" }),
    headers: { "Content-Type": "application/json" },
  }).then(() => {
    console.log("✅ 전송 완료!");
  }).catch((err) => {
    console.error("❌ 전송 실패", err);
  });
  
  sessionStorage.setItem(key, "1");
}
