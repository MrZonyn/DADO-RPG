"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function rollDie(sides) {
    const modifierInput = document.querySelector(".plus");
    const modifier = modifierInput ? parseInt(modifierInput.value, 10) || 0 : 0;
    const rawRoll = Math.floor(Math.random() * sides) + 1;
    const total = rawRoll + modifier;
    addRollToHistory(sides, rawRoll, modifier, total);
}
function addRollToHistory(sides, rawRoll, modifier, total) {
    const historyContainer = document.querySelector(".dice-result");
    if (!historyContainer)
        return;
    const isCritical = rawRoll === sides;
    const isFumble = rawRoll === 1;
    // Cria elemento input
    const entry = document.createElement("div");
    entry.classList.add("roll-entry");
    if (isCritical)
        entry.classList.add("critical");
    if (isFumble)
        entry.classList.add("fumble");
    // Texto do modificador
    let detailText = `Rolou ${rawRoll}`;
    if (modifier !== 0) {
        const sign = modifier > 0 ? "+" : "−";
        detailText += ` ${sign} ${Math.abs(modifier)} = ${total}`;
    }
    // crítico ou fumble
    let badgeHTML = "";
    if (isCritical)
        badgeHTML = `<span class="roll-badge badge-critical">CRÍTICO!</span>`;
    if (isFumble)
        badgeHTML = `<span class="roll-badge badge-fumble">FUMBLE!</span>`;
    // Timestamp
    const now = new Date();
    const time = now.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    entry.innerHTML = `
    <span class="entry-die-name">d${sides}</span>
    <span class="entry-detail">${detailText}</span>
    ${badgeHTML}
    <span class="entry-result">${total}</span>
    <span class="entry-time">${time}</span>
  `;
    // Insere no histórico
    historyContainer.insertBefore(entry, historyContainer.firstChild);
}
// chamada pelo onclick no HTML
window.rollDie = rollDie;
//# sourceMappingURL=script.js.map