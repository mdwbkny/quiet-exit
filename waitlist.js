// Replace the empty string with your public Formspree endpoint.
const endpoint = "";

const form = document.querySelector("#waitlist");
const button = form.querySelector("button");
const status = document.querySelector("#form-status");

if (endpoint) {
  button.disabled = false;
} else {
  status.textContent = "Early-access registration isn’t open yet.";
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!endpoint || button.disabled) return;

  const data = new FormData(form);
  button.disabled = true;
  status.textContent = "Sending your request…";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) throw new Error("Request failed");
    form.reset();
    status.textContent = "You’re on the list. We’ll email you if your positions are a fit.";
  } catch {
    status.textContent = "We couldn’t confirm your request. Please try again.";
  } finally {
    button.disabled = false;
  }
});
