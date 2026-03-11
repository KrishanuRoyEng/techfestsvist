import {
    Star,
    FlyingParticle,
    Building,
    BackgroundBuilding,
} from '@/types';

const PINK = '#ff2d9b';
const CYAN = '#00f0ff';
const PURPLE = '#9b30ff';
const ORANGE = '#ff6a00';
const neonCols = [PINK, CYAN, PURPLE, ORANGE, '#ff8800', '#00ffaa'];

function randomColor(): string {
    return neonCols[Math.floor(Math.random() * neonCols.length)];
}

export function buildCityData(W: number, H: number) {
    const stars: Star[] = [];
    const flyP: FlyingParticle[] = [];
    const bgBuildings: BackgroundBuilding[] = [];
    const buildings: Building[] = [];

    for (let i = 0; i < 200; i++) {
        stars.push({
            x: Math.random() * W,
            y: Math.random() * H * 0.6,
            r: Math.random() * 0.8 + 0.2,
            a: Math.random() * 0.6 + 0.2,
            f: Math.random(),
        });
    }

    for (let i = 0; i < 8; i++) {
        flyP.push({
            x: Math.random() * W,
            y: H * 0.4 + Math.random() * H * 0.15,
            vx: (Math.random() + 0.3) * (Math.random() > 0.5 ? 1 : -1) * 1.5,
            len: Math.random() * 60 + 30,
            col: Math.random() > 0.5 ? CYAN : PINK,
            a: Math.random() * 0.7 + 0.3,
        });
    }

    const bgCount = Math.floor(W / 30);
    for (let i = 0; i < bgCount; i++) {
        const bw = Math.random() * 60 + 25;
        const bh = Math.random() * (H * 0.35) + H * 0.1;
        const bx = Math.random() * W;
        bgBuildings.push({
            x: bx,
            w: bw,
            h: bh,
            col: randomColor(),
            ho: Math.random() > 0.4,
            wc: randomColor(),
            sh: Math.floor(Math.random() * 4),
        });
    }

    let x = 0;
    while (x < W + 80) {
        const bw = Math.random() * 100 + 40;
        const bh = Math.random() * (H * 0.55) + H * 0.2;
        const wc = randomColor();
        const wins = [];
        const wr = Math.floor(bh / 18);
        const wc2 = Math.floor(bw / 14);
        for (let r = 0; r < wr; r++) {
            for (let c = 0; c < wc2; c++) {
                wins.push({
                    r,
                    c,
                    on: Math.random() > 0.35,
                    fl: Math.random() > 0.8,
                    ph: Math.random() * 6.28,
                });
            }
        }
        buildings.push({
            x,
            w: bw,
            h: bh,
            y: H - bh,
            wc,
            wins,
            sh: Math.floor(Math.random() * 5),
            ant: Math.random() > 0.5,
            ne: Math.random() > 0.4,
            ec: randomColor(),
        });
        x += bw + Math.random() * 8 - 4;
    }

    return { stars, flyP, bgBuildings, buildings };
}

export function drawBuildingShape(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    s: number
) {
    ctx.beginPath();
    switch (s) {
        case 0:
            ctx.rect(x, y, w, h);
            break;
        case 1:
            ctx.moveTo(x, y + h);
            ctx.lineTo(x, y + h * 0.25);
            ctx.lineTo(x + w * 0.15, y + h * 0.25);
            ctx.lineTo(x + w * 0.15, y);
            ctx.lineTo(x + w * 0.85, y);
            ctx.lineTo(x + w * 0.85, y + h * 0.25);
            ctx.lineTo(x + w, y + h * 0.25);
            ctx.lineTo(x + w, y + h);
            ctx.closePath();
            break;
        case 2:
            ctx.moveTo(x, y + h);
            ctx.lineTo(x, y + h * 0.3);
            ctx.lineTo(x + w * 0.2, y);
            ctx.lineTo(x + w * 0.8, y);
            ctx.lineTo(x + w, y + h * 0.3);
            ctx.lineTo(x + w, y + h);
            ctx.closePath();
            break;
        case 3:
            ctx.moveTo(x, y + h);
            ctx.lineTo(x, y + h * 0.2);
            ctx.lineTo(x + w / 2, y);
            ctx.lineTo(x + w, y + h * 0.2);
            ctx.lineTo(x + w, y + h);
            ctx.closePath();
            break;
        case 4:
            ctx.moveTo(x, y + h);
            ctx.lineTo(x, y + h * 0.35);
            ctx.lineTo(x + w * 0.35, y + h * 0.1);
            ctx.lineTo(x + w / 2, y);
            ctx.lineTo(x + w * 0.65, y + h * 0.1);
            ctx.lineTo(x + w, y + h * 0.35);
            ctx.lineTo(x + w, y + h);
            ctx.closePath();
            break;
        default:
            ctx.rect(x, y, w, h);
    }
}

export function drawFrame(
    cx: CanvasRenderingContext2D,
    W: number,
    H: number,
    t: number,
    stars: Star[],
    bgBuildings: BackgroundBuilding[],
    buildings: Building[],
    flyP: FlyingParticle[]
) {
    cx.clearRect(0, 0, W, H);

    const sky = cx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#020008');
    sky.addColorStop(0.3, '#0a0025');
    sky.addColorStop(0.55, '#150045');
    sky.addColorStop(0.7, '#1a0030');
    sky.addColorStop(0.85, '#250010');
    sky.addColorStop(1, '#0a0008');
    cx.fillStyle = sky;
    cx.fillRect(0, 0, W, H);

    const hg = cx.createRadialGradient(W / 2, H * 0.62, 0, W / 2, H * 0.62, W * 0.7);
    hg.addColorStop(0, 'rgba(155,48,255,.18)');
    hg.addColorStop(0.4, 'rgba(255,45,155,.1)');
    hg.addColorStop(0.7, 'rgba(0,240,255,.06)');
    hg.addColorStop(1, 'transparent');
    cx.fillStyle = hg;
    cx.fillRect(0, 0, W, H);

    stars.forEach((s) => {
        cx.beginPath();
        cx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        cx.fillStyle = `rgba(255,255,255,${s.a * (0.7 + 0.3 * Math.sin(t * s.f * 3 + s.x))})`;
        cx.fill();
    });

    bgBuildings.forEach((b) => {
        const by = H - b.h;
        cx.fillStyle = 'rgba(2,0,10,.85)';
        drawBuildingShape(cx, b.x, by, b.w, b.h, b.sh);
        cx.fill();
        if (b.ho) {
            cx.strokeStyle = b.col;
            cx.lineWidth = 0.6;
            cx.globalAlpha = 0.25 + 0.08 * Math.sin(t + b.x);
            drawBuildingShape(cx, b.x, by, b.w, b.h, b.sh);
            cx.stroke();
            cx.globalAlpha = 1;
        }
    });

    buildings.forEach((b) => {
        const bg = cx.createLinearGradient(b.x, b.y, b.x + b.w, b.y + b.h);
        bg.addColorStop(0, 'rgba(8,4,20,.98)');
        bg.addColorStop(1, 'rgba(12,6,30,.98)');
        cx.fillStyle = bg;
        drawBuildingShape(cx, b.x, b.y, b.w, b.h, b.sh);
        cx.fill();

        if (b.ne) {
            cx.save();
            cx.shadowColor = b.ec;
            cx.shadowBlur = 8;
            cx.strokeStyle = b.ec;
            cx.lineWidth = 1;
            cx.globalAlpha = 0.4 + 0.15 * Math.sin(t * 1.5 + b.x * 0.01);
            drawBuildingShape(cx, b.x, b.y, b.w, b.h, b.sh);
            cx.stroke();
            cx.restore();
        }

        b.wins.forEach((w) => {
            if (!w.on) return;
            const fa = w.fl ? 0.5 + 0.5 * Math.sin(t * 3 + w.ph) : 1;
            const wx = b.x + 6 + w.c * 14;
            const wy = b.y + 8 + w.r * 18;
            if (wx + 6 > b.x + b.w - 6 || wy + 4 > b.y + b.h - 4) return;
            cx.save();
            cx.shadowColor = b.wc;
            cx.shadowBlur = 4;
            cx.fillStyle = b.wc;
            cx.globalAlpha = 0.35 * fa;
            cx.fillRect(wx, wy, 6, 4);
            cx.restore();
        });

        if (b.ant) {
            const ax = b.x + b.w / 2;
            const ah = 15;
            cx.save();
            cx.strokeStyle = 'rgba(255,255,255,.3)';
            cx.lineWidth = 1;
            cx.beginPath();
            cx.moveTo(ax, b.y);
            cx.lineTo(ax, b.y - ah);
            cx.stroke();
            cx.beginPath();
            cx.arc(ax, b.y - ah, 2, 0, Math.PI * 2);
            cx.fillStyle = PINK;
            cx.shadowColor = PINK;
            cx.shadowBlur = 8;
            cx.globalAlpha = 0.5 + 0.5 * Math.sin(t * 2 + b.x);
            cx.fill();
            cx.restore();
        }
    });

    cx.save();
    cx.shadowColor = PINK;
    cx.shadowBlur = 20;
    cx.strokeStyle = 'rgba(255,45,155,.4)';
    cx.lineWidth = 1;
    cx.beginPath();
    cx.moveTo(0, H * 0.85);
    cx.lineTo(W, H * 0.85);
    cx.stroke();
    cx.restore();

    flyP.forEach((p) => {
        p.x += p.vx;
        if (p.x > W + 100) p.x = -100;
        if (p.x < -100) p.x = W + 100;
        cx.save();
        cx.globalAlpha = p.a * (0.6 + 0.4 * Math.random());
        const g = cx.createLinearGradient(
            p.vx > 0 ? p.x - p.len : p.x,
            p.y,
            p.vx > 0 ? p.x : p.x + p.len,
            p.y
        );
        g.addColorStop(0, 'transparent');
        g.addColorStop(1, p.col);
        cx.fillStyle = g;
        cx.fillRect(p.vx > 0 ? p.x - p.len : p.x, p.y - 1, p.len, 2);
        cx.restore();
    });
}
