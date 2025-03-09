const rysujAutka = () => {
    const canvas = document.getElementById("mojCanvas");
    if (!canvas) {
        console.error("Nie znaleziono elementu <canvas> o id 'mojCanvas'");
        return;
    }
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Czyszczenie canvasu
    ctx.save();

    const kolor = document.getElementById('kolor').value
    const skala = document.getElementById('skala').value
    const obrot = document.getElementById('obrot').value
    ctx.translate(300, 200)


    // Skalowanie
    const skala1 = skala / 100; // Przeliczanie skali
    ctx.scale(skala1, skala1); // Poprawiona nazwa metody: scale zamiast scala

    const rotate = obrot * Math.PI / 180
    ctx.rotate(rotate)

    ctx.fillStyle = kolor
    ctx.fillRect(-100, -40, 200, 80);

    //dach

    ctx.fillStyle = "#888"
    ctx.fillRect(-60, -70, 120, 30);

    //colo

    ctx.fillStyle = "black"

    //lewe kolo
    ctx.beginPath()
    ctx.arc(-60, 40, 20, 0, 2 * Math.PI);
    ctx.fill()

    //prawo kolo
    ctx.beginPath()
    ctx.arc(60, 40, 20, 0, 2 * Math.PI);
    ctx.fill()

    //okno

    ctx.fillStyle = "cyan"

    ctx.fillRect(-50, -65, 45, 20);
    ctx.fillRect(5, -65, 45, 20);
    ctx.restore()


}
rysujAutka()