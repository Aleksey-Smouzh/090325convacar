const rysujAutka = () => {
    const canvas = document.getElementById("mojCanvas");
    if (!canvas) {
        console.error("Nie znaleziono elementu <canvas> o id 'mojCanvas'");
        return;
    }
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Czyszczenie canvasu
    ctx.save();


    


















}
rysujAutka()