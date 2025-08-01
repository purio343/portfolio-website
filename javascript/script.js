function embeddingInformation() {
  fetch("info.json")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("title").innerHTML = data.title;
      document.getElementById("name").innerHTML = data.name;
      document.getElementById("email").innerHTML = data.email;
      const skills = data.skills;
      addSkills(skills);
    });
}

function addSkills(skills) {
  const skillsContainer = document.getElementById("skills");
  skills.forEach((skill) => {
    const div = document.createElement("div");
    div.className =
      "flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf4] pl-4 pr-4";
    const p = document.createElement("p");
    p.className = "text-[#0d141c] text-sm font-medium leading-normal";
    div.appendChild(p);
    p.innerHTML = skill;
    skillsContainer.appendChild(div);
  });
}

embeddingInformation();
