/* eslint-disable no-undef */
const _eciUtils = {};

_eciUtils.includeHTML = templateId => {
  console.log("----- <eci-utils.js> includeHTML ------");

  const includeAreaId = `include_${templateId}`;

  console.log(`  includeAreaId : '${includeAreaId}'`);
  console.log(`  templateId : '${templateId}'`);

  window._scq.push(["_setCustomField", 1, "template_id_001"]);
  window._scq.push(["_trackPageview"]);

  let intervaCount = 0;
  const includeInterval = 100;
  const templateIntervalId = setInterval(() => {
    if (intervaCount >= 10) {
      clearInterval(templateIntervalId);
      return;
    }

    const templateElement = window.document.getElementById(templateId);
    if (templateElement) {
      intervaCount = 0;
      clearInterval(templateIntervalId);

      const includeAreaIntervalId = setInterval(() => {
        const includeAreaElement = window.document.getElementById(
          includeAreaId
        );
        if (includeAreaElement) {
          intervaCount = 0;
          clearInterval(includeAreaIntervalId);

          const removedElementIntervalId = setInterval(() => {
            if (intervaCount >= 10) {
              clearInterval(removedElementIntervalId);
              return;
            }

            const removeElement = window.document.getElementById(templateId);
            if (removeElement) {
              removeElement.parentNode.remove();
            } else {
              clearInterval(removedElementIntervalId);

              let { outerHTML } = templateElement.parentNode;
              outerHTML = outerHTML.replace(
                "display: none;",
                "display: block;"
              );
              includeAreaElement.outerHTML = outerHTML;
            }

            intervaCount++;
          }, includeInterval);
        }

        intervaCount++;
      }, includeInterval);
    }

    intervaCount++;
  }, includeInterval);
};

_eciUtils.fetchJsonData = async params => {
  console.log("----- <eci-utils.js> fetchJsonData ------");

  const queryString =
    params.queries.length < 1 ? "" : `&${params.queries.join("&")}`;

  // Don't encodeURI
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

_eciUtils.fetchTimeSaleItems = async (startDate, toDate) => {
  const params = {
    host: "ui2.scinable.net",
    type: "search",
    account: "ui2-1",
    queries: [`string6=${startDate}`, `string7=${toDate}`],
  };

  return _eciUtils.fetchJsonData(params).then(data => data);
};

window._eciUtils = _eciUtils;
