'use strict';


for (let i = 0; i >= people.length - 1; i++) {
    if (people[i] === "Phil" || people[i] === "Lola") {
        refused.textContent += people[i];
    } else {
        admitted.textContent = people[i];
    }
}




for (const cat of cats) {
    console.log(cat);
}


for (const p of people) {
    if (p === "Phil" || p === "Lola") {
        refused.textContent += `${p}, `;
    } else {
        admitted.textContent += `${p}, `;
    }
}

refused.textContent = `${refused.textContent.slice(0, -2)}.`;