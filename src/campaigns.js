import querystring from 'querystring';

import defaultLogoFile from 'assets/images/center-ignite-logo.png';

export default function parse() {
  // configure based on URL params (first hash, then querystring)
  let params = querystring.parse(window.location.hash.replace('#', ''));

  if (!Object.keys(params).length) {
    params = querystring.parse(window.location.search.replace('?', ''));
  }

  // match campaign name on #c= or #campaign=
  let campaignName = params.c || params.campaign || '';
  // make case insensitive by matching on lowercase
  campaignName = campaignName.toLowerCase();

  let campaigns = {
    'default': {
      logoFile: defaultLogoFile,
      hostEventLink: 'https://ignite.biologicaldiversity.org/go/host',
      showACLU: true,
      filters: {},
    }
  };
  campaigns['vr'] = campaigns['votingrights']; // add shorter alias

  let options = campaigns[campaignName] || campaigns['default'];

  // replace source parameter, if available
  options.source = params.source || 'V19_IC';
  options.akid = params.akid || '';

  return options;
};
