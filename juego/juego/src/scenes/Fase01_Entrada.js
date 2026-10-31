export class Fase01_Entrada extends Phaser.Scene {
  constructor() {
    super('Fase01_Entrada');
  }

  create() {
    this.cameras.main.fadeIn(1500, 0, 0, 0);

    const { width, height } = this.scale;

    const linea = this.add
      .text(width / 2, height / 2, '', {
        fontFamily: 'Georgia, serif',
        fontSize: '22px',
        color: '#e8e8e8',
        align: 'center',
        wordWrap: { width: width * 0.7 },
      })
      .setOrigin(0.5)
      .setAlpha(0);

    const texto = 'Hay un sonido que no deberías escuchar todavía.';
    let i = 0;

    this.tweens.add({
      targets: linea,
      alpha: 1,
      duration: 2000,
      ease: 'Sine.easeIn',
    });

    this.time.addEvent({
      delay: 80,
      repeat: texto.length - 1,
      callback: () => {
        i++;
        linea.setText(texto.substring(0, i));
      },
    });

    this.time.delayedCall(5000, () => {
      const hint = this.add
        .text(width / 2, height - 60, 'clic para continuar', {
          fontFamily: 'Georgia, serif',
          fontSize: '14px',
          color: '#555555',
        })
        .setOrigin(0.5)
        .setAlpha(0);

      this.tweens.add({ targets: hint, alpha: 1, duration: 1500 });
    });

    this.input.once('pointerdown', () => {
      this.cameras.main.fadeOut(1500, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () => {
        this.scene.restart();
      });
    });
  }
}