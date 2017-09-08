import packageJson from '../../package.json';

class Watermark extends Meister.ProtoPlugin {
    constructor(config, meister) {
        super(config, meister);

        config.position = config.position || 'top-left';

        if (!config.iconUrl) {
            console.warn('iconUrl was not found in Watermark:{}, plugin will not load.');
            return [];
        }

        this.onPlayerCreated();
    }

    static get pluginName() {
        return 'Watermark';
    }

    static get pluginVersion() {
        return packageJson.version;
    }


    onPlayerCreated() {
        const watermarkElement = document.createElement('div');
        watermarkElement.className = 'meister-plugin-watermark-wrapper';

        const imageElement = document.createElement('img');
        imageElement.src = this.config.iconUrl;

        watermarkElement.appendChild(imageElement);

        if (this.config.style) {
            Object.keys(this.config.style).forEach((key) => {
                watermarkElement.style[key] = this.config.style[key];
            });
        }

        this.meister.wrapper.appendChild(watermarkElement);

        if (this.config.position) {
            watermarkElement.className += ` meister-plugin-watermark-${this.config.position}`;
        }
    }
}

Meister.registerPlugin(Watermark.pluginName, Watermark);

export default Watermark;
