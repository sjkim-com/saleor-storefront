/* eslint-disable no-undef */
const _eciUtils = {};

_eciUtils.includeHTML = (sourceId, destinationId) => {
  console.log("----- <eci-utils.js> includeHTML ------");
  console.log(`  sourceId : '${sourceId}'`);
  console.log(`  destinationId : '${destinationId}'`);

  let includeIntervaCount = 0;
  const includeInterval = 100;
  const includeIntervalId = setInterval(() => {
    if (includeIntervaCount >= 10) {
      clearInterval(includeIntervalId);
      return;
    }

    const destinationElement = window.document.getElementById(destinationId);
    if (destinationElement) {
      clearInterval(includeIntervalId);

      // const bodyElement = window.document.getElementsByTagName("body")[0];
      // const bodyPosition = bodyElement.style.position;
      // bodyElement.style.position = "fixed";

      const sourceElement = window.document.getElementById(sourceId);
      window.document.getElementById(sourceId).parentNode.remove();

      let removeIntervaCount = 0;
      const removedIntervalId = setInterval(() => {
        if (removeIntervaCount >= 10) {
          clearInterval(removedIntervalId);
          return;
        }
        if (window.document.getElementById(sourceId) === null) {
          clearInterval(removedIntervalId);

          let { outerHTML } = sourceElement.parentNode;
          outerHTML = outerHTML.replace("display: none;", "display: block;");
          destinationElement.outerHTML = outerHTML;
          // bodyElement.style.position = bodyPosition;
        }
        removeIntervaCount++;
      }, includeInterval);
    }
    includeIntervaCount++;
  }, includeInterval);
};

_eciUtils.fetchJsonData = async params => {
  console.log("----- <eci-utils.js> fetchJsonData ------");

  const queryString =
    params.queries.length < 1 ? "" : `&${params.queries.join("&")}`;

  const url = `//${params.host}/${params.type}?aid=${params.account}&t=json${queryString}`;

  const data = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8;",
    },
  })
    .then(response => response.json())
    .then(data => data);

  return data;
};

window._eciUtils = _eciUtils;
