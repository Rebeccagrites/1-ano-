const defaultConfig = {
  site_title: 'Meu Ano Musical',
  site_subtitle: 'Uma jornada através das estações em melodias',
  song_description: 'Ouça a trilha sonora que embala cada momento deste ano especial',
  song_link: 'https://open.spotify.com'
};

async function onConfigChange(config) {
  document.getElementById('site-title').textContent =
    config.site_title || defaultConfig.site_title;

  document.getElementById('site-subtitle').textContent =
    config.site_subtitle || defaultConfig.site_subtitle;

  document.getElementById('song-description').textContent =
    config.song_description || defaultConfig.song_description;

  document.getElementById('song-link').href =
    config.song_link || defaultConfig.song_link;
}

function mapToCapabilities() {
  return {
    recolorables: [],
    borderables: [],
    fontEditable: undefined,
    fontSizeable: undefined
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ['site_title', config.site_title || defaultConfig.site_title],
    ['site_subtitle', config.site_subtitle || defaultConfig.site_subtitle],
    ['song_description', config.song_description || defaultConfig.song_description],
    ['song_link', config.song_link || defaultConfig.song_link]
  ]);
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

