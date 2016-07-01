let extractAppIdfromHost = () => {
  return window.location.hostname.replace(/www\./g, '').replace(/\./g, '-');
};

let extractCookieDomainFromHost = (stringToRemove) => {
  return `.${window.location.hostname.replace(/www\./g, '').replace(stringToRemove, '')}`;
};

export default (input) => {
  let output = input;
  output.appId = input.appId || extractAppIdfromHost();
  output.cookieDomain = input.cookieDomain || extractCookieDomainFromHost(input.cookieDomainRemove);
};
