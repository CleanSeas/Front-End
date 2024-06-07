window.watsonAssistantChatOptions = {
    integrationID: "39544780-801c-4a76-b73d-9da02bf62dab", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "fe45111f-d88e-4ede-9e66-f6f3f94cf2e0", // The ID of your service instance.
onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});