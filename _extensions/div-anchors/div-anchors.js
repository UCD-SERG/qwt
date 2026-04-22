<script>
const theoremLikeClasses = new Set([
  "thm",
  "theorem",
  "lem",
  "lemma",
  "cor",
  "corollary",
  "prp",
  "proposition",
  "cnj",
  "conjecture",
  "def",
  "definition",
  "exm",
  "example",
  "exr",
  "exercise",
  "proof",
  "remark",
  "solution"
]);

const isTheoremLikeDiv = (div) =>
  Array.from(div.classList).some((className) => theoremLikeClasses.has(className));

const addTheoremLikeDivAnchors = () => {
  for (const theoremDiv of window.document.querySelectorAll("div[id]")) {
    if (!isTheoremLikeDiv(theoremDiv)) {
      continue;
    }

    if (!theoremDiv.classList.contains("anchored")) {
      theoremDiv.classList.add("anchored");
    }

    if (!theoremDiv.dataset.anchorId) {
      theoremDiv.dataset.anchorId = theoremDiv.id;
    }

  }
};

if (window.document.readyState === "loading") {
  window.document.addEventListener("DOMContentLoaded", addTheoremLikeDivAnchors);
} else {
  addTheoremLikeDivAnchors();
}
</script>
