var updateQueue = [];

let lastTick = new Date;
let ticksPerSecond = 0;
let updates = 0;

let pauseSimulation = false;

function tick() {
    const start = new Date;

    while(updateQueue.length > 0 && new Date - start < 17) {
        const update = updateQueue.splice(0,1)[0];

        if(update.delay != undefined && new Date - update.start < update.delay) {
            updateQueue.push(update);
            continue;
        }
        update.f();
    }

    ticksPerSecond = 1000 / (new Date - lastTick);
    lastTick = new Date;
}

setInterval(tick,17);