// fetch projects
fetch('/api/projects')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('project-list');
    data.forEach(project => {
      container.innerHTML += `
        <div class="project-card">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      `;
    });
  });

// fetch skills
fetch('/api/skills')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('skill-list');
    data.forEach(skill => {
      container.innerHTML += `
        <div class="skill-badge">${skill.name}</div>
      `;
    });
  });

// contact
document.getElementById('contact-form')
  .addEventListener('submit', async (e) => {
    e.preventDefault();
    await fetch('/api/contact', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value
      })
    });
    alert('Message Sent! 🎉');
  });