const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Responsive Design", "UX/UI", "Node.js"];

function addSkill() {
  const randomSkill = skills[Math.floor(Math.random() * skills.length)];
  const skillList = document.getElementById("skillList");

  // Check for duplicates
  const items = Array.from(skillList.children).map(li => li.textContent);
  if (!items.includes(randomSkill)) {
    const li = document.createElement("li");
    li.textContent = randomSkill;
    skillList.appendChild(li);
  } else {
    alert("Skill already added!");
  }
}