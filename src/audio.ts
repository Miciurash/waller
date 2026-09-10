let ctx: AudioContext | null = null;

function context(): AudioContext | null {
  if (!ctx) {
    try {
      ctx = new AudioContext();
    } catch {
      return null;
    }
  }
  if (ctx.state === "suspended") {
    void ctx.resume();
  }
  return ctx;
}

function tone(
  frequency: number,
  duration: number,
  type: OscillatorType,
  gain = 0.05,
): void {
  const audio = context();
  if (!audio) {
    return;
  }
  const osc = audio.createOscillator();
  const amp = audio.createGain();
  osc.type = type;
  osc.frequency.value = frequency;
  amp.gain.value = gain;
  amp.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + duration);
  osc.connect(amp);
  amp.connect(audio.destination);
  osc.start();
  osc.stop(audio.currentTime + duration);
}

export const sfx = {
  wake: context,
  wall: () => tone(140, 0.12, "square", 0.04),
  bridge: () => tone(220, 0.14, "triangle", 0.05),
  blast: () => tone(520, 0.07, "sawtooth", 0.035),
  hit: () => tone(180, 0.08, "square", 0.04),
  hurt: () => tone(90, 0.16, "sawtooth", 0.05),
  miss: () => tone(90, 0.06, "square", 0.02),
  jump: () => tone(320, 0.07, "square", 0.025),
  break: () => tone(110, 0.1, "square", 0.04),
};
