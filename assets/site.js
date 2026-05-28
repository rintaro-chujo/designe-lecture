(function () {
  function status(message, isError) {
    const el = document.querySelector(".copy-status");
    if (!el) return;
    el.textContent = message;
    el.style.color = isError ? "#b91c1c" : "";
    window.clearTimeout(status.timer);
    status.timer = window.setTimeout(() => {
      el.textContent = "";
      el.style.color = "";
    }, 1800);
  }

  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        status("コピーしました");
        return;
      }
    } catch (error) {
      // Fall back below. Local previews can deny clipboard access.
    }

    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(area);
    status(
      ok
        ? "コピーしました"
        : "コピーできませんでした。手動で選択してください。",
      !ok,
    );
  }

  function downloadText(text, filename) {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(link.href);
    document.body.removeChild(link);
  }

  const agentsStorageKey = "designeLecture.agentsMdDraft";

  function agentsDraftElement() {
    return document.querySelector("[data-agents-draft]");
  }

  function agentsDraftText() {
    const draft = agentsDraftElement();
    return draft ? draft.value : "";
  }

  function saveAgentsDraft() {
    const draft = agentsDraftElement();
    if (!draft) return;
    try {
      window.localStorage.setItem(agentsStorageKey, draft.value);
    } catch (error) {
      // Private browsing or storage restrictions can make localStorage fail.
    }
  }

  function initAgentsDraft() {
    const draft = agentsDraftElement();
    if (!draft) return;

    try {
      const saved = window.localStorage.getItem(agentsStorageKey);
      if (saved !== null) draft.value = saved;
    } catch (error) {
      // Keep the textarea's bundled draft if storage is unavailable.
    }

    draft.addEventListener("input", saveAgentsDraft);
  }

  document.addEventListener("click", (event) => {
    const directButton = event.target.closest("[data-copy]");
    if (directButton) {
      copyText(directButton.getAttribute("data-copy"));
      return;
    }

    const targetButton = event.target.closest("[data-copy-target]");
    if (targetButton) {
      const selector = targetButton.getAttribute("data-copy-target");
      const target = document.querySelector(selector);
      if (target) copyText(target.value || target.textContent || "");
      return;
    }

    const downloadButton = event.target.closest("[data-download-agents]");
    if (downloadButton) {
      saveAgentsDraft();
      downloadText(agentsDraftText(), "AGENTS.md");
      status("AGENTS.mdをダウンロードしました");
    }
  });

  initAgentsDraft();
})();
