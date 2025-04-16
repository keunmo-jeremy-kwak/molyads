(function () {
  const params = new URLSearchParams(window.location.search);
  const media = params.get("media");
  const userkey = params.get("userkey");
  const key = `ot_complete_${userkey}`;

  if (!sessionStorage.getItem(key)) {
    fetch("https://ot-tracker-api.onrender.com/track/complete", {
      method: "POST",
      body: JSON.stringify({ media, userkey, event: "complete" }),
      headers: { "Content-Type": "application/json" },
    });
    sessionStorage.setItem(key, "1");
  }
})();
