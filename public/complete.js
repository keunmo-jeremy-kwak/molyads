const cParams = new URLSearchParams(window.location.search);

const c_ad_adv = cParams.get("ad_adv");
const c_ad_campaign = cParams.get("ad_campaign");
const c_ad_media = cParams.get("ad_media");
const c_ad_user = cParams.get("ad_user");
const c_ad_source = cParams.get("ad_source");
const c_ad_format = cParams.get("ad_format");

console.log("📦 광고주:", c_ad_adv);
console.log("📦 캠페인:", c_ad_campaign);
console.log("📡 매체:", c_ad_media);
console.log("🧍 유저:", c_ad_user);

if (!c_ad_media || !c_ad_user) {
  console.warn("❗ 필수 파라미터 누락 (ad_media/ad_user)");
} else {
  const c_key = `ot_complete_${c_ad_user}`;
  if (!sessionStorage.getItem(c_key)) {
    fetch("https://ot-tracker-api.onrender.com/track/complete", {
      method: "POST",
      body: JSON.stringify({
        ad_adv: c_ad_adv,
        ad_campaign: c_ad_campaign,
        ad_media: c_ad_media,
        ad_user: c_ad_user,
        ad_source: c_ad_source,
        ad_format: c_ad_format,
        event: "complete"
      }),
      headers: { "Content-Type": "application/json" },
    })
    .then(() => console.log("✅ complete 전송 완료!"))
    .catch(err => console.error("❌ complete 전송 실패", err));

    console.log("✅ 전체 파라미터 문자열:", params.toString());


    sessionStorage.setItem(c_key, "1");
  }
}
