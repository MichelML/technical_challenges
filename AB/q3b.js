"use strict";
const ResponseBodyWriter = function(serializer) {

    if (!serializer) {
        throw ("A Serializer object must be passed as an argument to the ResponseBodyWriter class");
    }

    const SERIALIZER = serializer;

    this.getSerializer = () => SERIALIZER;

};

ResponseBodyWriter.prototype.write = (response, rawContent) => {
    const SERIALIZER = this.getSerializer();
    const ContentType = response.getContentType() || "";
    let serializedContent;

    switch (ContentType) {
        case "application/xml":
            serializedContent = SERIALIZER.writeXML(rawContent);
            response.getWriter().write(serializedContent);
            break;
        case "application/json":
            serializedContent = SERIALIZER.writeJSON(rawContent);
            response.getWriter().write(serializedContent);
            break;
        default:
            serializedContent = JSON.stringify(rawContent);
            response.getWriter().write(serializedContent);
    }
};
