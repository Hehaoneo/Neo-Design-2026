let projectLang = "zh";

const projectRoot = document.querySelector("#projectRoot");
const langButton = document.querySelector("[data-project-lang-toggle]");
const params = new URLSearchParams(window.location.search);
const currentId = params.get("id") || portfolioProjects[0].id;
const project = portfolioProjects.find((item) => item.id === currentId);

function imagePath(projectItem, index) {
  return `${projectItem.imageDir}/${String(index + 1).padStart(2, "0")}.jpg`;
}

function localize(projectItem, key) {
  if (projectLang === "en") {
    return projectItem[`${key}En`] || projectItem[key];
  }
  return projectItem[key];
}

function renderMissingProject() {
  document.title = "项目未找到";
  projectRoot.innerHTML = `
    <section class="project-hero">
      <p class="eyebrow">Project not found</p>
      <h1>未找到对应项目</h1>
      <p class="hero-text">请从首页作品集卡片进入项目详情。</p>
      <div class="hero-actions">
        <a class="button primary" href="./index.html#work">返回作品集</a>
      </div>
    </section>
  `;
}

function renderProject() {
  if (!project) {
    renderMissingProject();
    return;
  }

  const title = localize(project, "title");
  const type = localize(project, "type");
  const platform = localize(project, "platform");
  const summary = localize(project, "summary");
  const tags = projectLang === "en" ? project.tagsEn : project.tags;
  const facts = projectLang === "en" ? project.factsEn : project.facts;
  const detailPoints = projectLang === "en" ? project.detailPointsEn : project.detailPoints;

  document.documentElement.lang = projectLang === "en" ? "en" : "zh-CN";
  document.title = `${title} - 何浩作品集`;
  langButton.textContent = projectLang === "en" ? "中" : "EN";

  projectRoot.innerHTML = `
    <section class="project-hero">
      <div class="project-hero-copy">
        <p class="eyebrow">${type}</p>
        <h1>${title}</h1>
        <p class="hero-text">${summary}</p>
        <div class="tags project-tags">
          ${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
      <div class="project-cover-card">
        <img src="${imagePath(project, 0)}" alt="${title} cover" />
      </div>
    </section>

    <section class="section project-gallery-section" id="gallery" aria-label="Project image gallery">
      <div class="section-heading">
        <p class="eyebrow">${projectLang === "en" ? "Design Project Summary" : "DESIGN PROJECT SUMMARY"}</p>
        <h2>${projectLang === "en" ? "Design Summary" : "设计总结"}</h2>
      </div>
      <div class="project-gallery">
        ${Array.from({ length: project.imageCount }, (_, index) => {
          const number = String(index + 1).padStart(2, "0");
          return `
            <figure class="project-image-frame">
              <img loading="lazy" src="${imagePath(project, index)}" alt="${title} image ${number}" />
              <figcaption>${title} / ${number}</figcaption>
            </figure>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

langButton.addEventListener("click", () => {
  projectLang = projectLang === "zh" ? "en" : "zh";
  renderProject();
});

renderProject();
