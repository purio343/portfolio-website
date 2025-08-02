function main() {
  embeddingInformation();
  downloadResume();
}

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
    const button = document.createElement("button");
    button.className =
      "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ";
    button.innerHTML = skill;
    skillsContainer.appendChild(button);
    button.addEventListener("click", () => console.log(skill));
  });
}

function downloadResume() {
  const resume = document.getElementById("resume-button");
  resume.addEventListener("click", () => console.log("Resuome button clicked"));
}

main();
