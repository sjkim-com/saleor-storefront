import * as React from "react";

const ECIincludeHtml: React.FC<{ templateId: string }> = ({ templateId }) => {
  console.log("----- <ECIincludeHtml.tsx> -----");

  const includeHtmlId = `include_${templateId}`;

  React.useEffect(() => {
    console.log("----- <ECIincludeHtml.tsx> window._scq.push -----");

    // EC Intelligenceの[接客]テンプレートを呼び出す
    window._scq.push(["_setCustomField", 1, templateId]);
    window._scq.push(["_trackPageview"]);

    console.log("----- <ECIincludeHtml.tsx> window._eciUtils.includeHTML -----");

    // EC Intelligenceが動的挿入したHTMLを<div>タグに移動
    window._eciUtils.includeHTML(templateId);
  }, []);

  // EC Intelligenceに登録したテンプレートHTMLを動的挿入する為の<div>タグ
  return <div id={includeHtmlId} />;
};

export default ECIincludeHtml;
