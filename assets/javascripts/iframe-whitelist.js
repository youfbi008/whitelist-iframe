(function() {
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.freesound\.org\/embed\/sound\/iframe\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/w\.soundcloud\.com\/player\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/graphics8\.nytimes\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/v\.qq\.com\/iframe\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/yuntv\.letv\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/v\.17173\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.google\.com\/maps\/d\/embed\?.+/i);
})();

