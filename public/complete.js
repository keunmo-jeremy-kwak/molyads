const params = new URLSearchParams(window.location.search);

const ad_adv = params.get("ad_adv");
const ad_campaign = params.get("ad_campaign");
const ad_media = params.get("ad_media");
const ad_user = params.get("ad_user");
const ad_source = params.get("ad_source");
const ad_format = params.get("ad_format");

console.log("📦 광고주:", ad_adv);
console.log("📦 캠페인:", ad_campaign);
console.log("📡 매체:", ad_media);
console.log("🧍 유저:", ad_user);

if (!ad_media || !ad_user) {
  console.warn("❗ 필수 파라미터 누락 (ad_media/ad_user)");
} else {
  const key = `ot_complete_${ad_user}`;
  if (!sessionStorage.getItem(key)) {
    fetch("https://ot-tracker-api.onrender.com/track/complete", {
      method: "POST",
      body: JSON.stringify({
        ad_adv,
        ad_campaign,
        ad_media,
        ad_user,
        ad_source,
        ad_format,
        event: "complete"
      }),
      headers: { "Content-Type": "application/json" },
    })
    .then(() => console.log("✅ complete 전송 완료!"))
    .catch(err => console.error("❌ complete 전송 실패", err));

    sessionStorage.setItem(key, "1");
  }
}
