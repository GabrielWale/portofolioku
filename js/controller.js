// controller.js

document.addEventListener("DOMContentLoaded", function () {
  const data = window.profileData;

  document.getElementById("about-content").innerHTML = `
    <p><strong>Nama:</strong> ${data.name}</p>
    <p><strong>TTL:</strong> ${data.birthdate}</p>
    <p><strong>Universitas:</strong> ${data.university}</p>
    <p><strong>Jurusan:</strong> ${data.major}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Tentang Saya:</strong> ${data.description}</p>
  `;

  fillList("organization-list", data.organization);
  fillList("committee-list", data.committees);
  fillList("achievement-list", data.achievements);
  fillList("skill-list", data.skills);
  fillList("weakness-list", data.weaknesses);
});

function fillList(elementId, items) {
  const ul = document.getElementById(elementId);
  if (ul) {
    ul.innerHTML = items.map(item => `<li>${item}</li>`).join('');
  }
}
